"use client";

import { useState, useEffect, useCallback } from "react";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  serverTimestamp,
  increment,
  arrayUnion,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { BADGES, checkBadges } from "@/lib/badges";

const LOCAL_KEY = "financekids_progress";

/**
 * useProgress — single source of truth for XP + completed lessons.
 * - If logged in: syncs with Firestore (source of truth) + local cache
 * - If guest: localStorage only
 */
export function useProgress() {
  const { user, profile, isLoggedIn } = useAuth();
  const [completed, setCompleted] = useState([]);
  const [totalXP, setTotalXP] = useState(0);
  const [newBadges, setNewBadges] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load progress on mount / auth change
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      if (isLoggedIn && user) {
        try {
          const ref = doc(db, "users", user.uid);
          const snap = await getDoc(ref);
          if (snap.exists()) {
            const data = snap.data();
            setCompleted(data.completedLessons || []);
            setTotalXP(data.totalXP || 0);
          }
        } catch (err) {
          console.warn("Firestore load failed, falling back to local:", err);
          loadLocal();
        }
      } else {
        loadLocal();
      }
      setLoading(false);
    };

    const loadLocal = () => {
      try {
        const saved = localStorage.getItem(LOCAL_KEY);
        if (saved) {
          const { completed: c, xp } = JSON.parse(saved);
          setCompleted(c || []);
          setTotalXP(xp || 0);
        }
      } catch {}
    };

    load();
  }, [user, isLoggedIn]);

  /**
   * completeLesson — called when a game finishes.
   * Updates Firestore (or localStorage) and checks for new badges.
   */
  const completeLesson = useCallback(
    async ({ lessonId, xpEarned, stars, score }) => {
      const isNew = !completed.includes(lessonId);
      const newCompleted = isNew ? [...completed, lessonId] : completed;
      const newXP = isNew ? totalXP + xpEarned : totalXP;

      setCompleted(newCompleted);
      setTotalXP(newXP);

      // Check new badges
      const earned = checkBadges({ completed: newCompleted, totalXP: newXP });
      const brandNew = earned.filter((b) => !profile?.badges?.includes(b));
      if (brandNew.length > 0) setNewBadges(brandNew);

      if (isLoggedIn && user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const updates = {
            lastActiveAt: serverTimestamp(),
            ...(isNew && {
              totalXP: increment(xpEarned),
              completedLessons: arrayUnion(lessonId),
            }),
          };
          if (brandNew.length > 0) {
            updates.badges = arrayUnion(...brandNew);
          }
          await setDoc(userRef, updates, { merge: true });

          // Save lesson progress record
          const progressRef = doc(db, "users", user.uid, "progress", lessonId);
          await setDoc(
            progressRef,
            {
              lessonId,
              completedAt: serverTimestamp(),
              score,
              stars,
              attempts: increment(1),
            },
            { merge: true }
          );

          // Update weekly leaderboard
          if (isNew) {
            const weekId = getWeekId();
            const lbRef = doc(db, "leaderboard", weekId, "entries", user.uid);
            await setDoc(
              lbRef,
              {
                uid: user.uid,
                displayName: profile?.displayName || "Bạn nhỏ",
                avatar: profile?.avatar || "🐷",
                xp: increment(xpEarned),
                updatedAt: serverTimestamp(),
              },
              { merge: true }
            );
          }
        } catch (err) {
          console.warn("Firestore write failed:", err);
        }
      } else {
        // Guest: save to localStorage
        localStorage.setItem(
          LOCAL_KEY,
          JSON.stringify({ completed: newCompleted, xp: newXP })
        );
      }
    },
    [completed, totalXP, user, isLoggedIn, profile]
  );

  const clearNewBadges = () => setNewBadges([]);

  return { completed, totalXP, newBadges, loading, completeLesson, clearNewBadges };
}

// Returns "YYYY-WW" string for the current ISO week
function getWeekId() {
  const now = new Date();
  const jan1 = new Date(now.getFullYear(), 0, 1);
  const week = Math.ceil(((now - jan1) / 86400000 + jan1.getDay() + 1) / 7);
  return `${now.getFullYear()}-W${String(week).padStart(2, "0")}`;
}

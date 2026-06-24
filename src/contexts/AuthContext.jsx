"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

const AuthContext = createContext(null);

const AVATARS = ["🐯", "🦊", "🐸", "🐧", "🦁", "🐼", "🐨", "🦄", "🐮", "🦋"];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Chưa cấu hình Firebase → chạy chế độ khách, bỏ qua auth listener
    if (!auth) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        // Load or create user profile in Firestore
        const userRef = doc(db, "users", firebaseUser.uid);
        const snap = await getDoc(userRef);
        if (snap.exists()) {
          setProfile(snap.data());
        } else {
          // New user — create profile
          const newProfile = {
            uid: firebaseUser.uid,
            displayName: firebaseUser.displayName || "Bạn nhỏ",
            photoURL: firebaseUser.photoURL || null,
            avatar: AVATARS[Math.floor(Math.random() * AVATARS.length)],
            ageGroup: null, // set during onboarding
            totalXP: 0,
            completedLessons: [],
            badges: [],
            streak: 0,
            lastActiveAt: serverTimestamp(),
            createdAt: serverTimestamp(),
            isAnonymous: firebaseUser.isAnonymous,
          };
          await setDoc(userRef, newProfile);
          setProfile(newProfile);
        }
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    if (!auth) throw new Error("Firebase chưa được cấu hình trên server");
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Google login error:", err);
      throw err;
    }
  };

  const loginAnonymous = async (nickname = "Bạn nhỏ", ageGroup = "9-12") => {
    if (!auth) throw new Error("Firebase chưa được cấu hình trên server");
    try {
      const cred = await signInAnonymously(auth);
      const avatar = AVATARS[Math.floor(Math.random() * AVATARS.length)];
      const userRef = doc(db, "users", cred.user.uid);
      const newProfile = {
        uid: cred.user.uid,
        displayName: nickname,
        photoURL: null,
        avatar,
        ageGroup,
        totalXP: 0,
        completedLessons: [],
        badges: [],
        streak: 0,
        lastActiveAt: serverTimestamp(),
        createdAt: serverTimestamp(),
        isAnonymous: true,
      };
      await setDoc(userRef, newProfile);
      setProfile(newProfile);
    } catch (err) {
      console.error("Anonymous login error:", err);
      throw err;
    }
  };

  const logout = async () => {
    if (auth) await signOut(auth);
    setUser(null);
    setProfile(null);
  };

  const updateAgeGroup = async (ageGroup) => {
    if (!user || !db) return;
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, { ageGroup }, { merge: true });
    setProfile((p) => ({ ...p, ageGroup }));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        loginWithGoogle,
        loginAnonymous,
        logout,
        updateAgeGroup,
        isLoggedIn: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};

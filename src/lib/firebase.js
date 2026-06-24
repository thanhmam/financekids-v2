import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Chỉ khởi tạo khi đã có cấu hình hợp lệ — tránh crash khi build/deploy
// thiếu env (app vẫn chạy ở chế độ khách + localStorage).
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId
);

let app = null;
let db = null;
let auth = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app);
    auth = getAuth(app);
  } catch (err) {
    console.warn("Firebase init failed — chạy ở chế độ khách:", err?.message);
  }
}

export { db, auth };

// Analytics only in browser
export const getAnalyticsInstance = async () => {
  if (app && (await isSupported())) {
    return getAnalytics(app);
  }
  return null;
};

export default app;

/**
 * Firestore Data Structure:
 *
 * /users/{userId}
 *   - displayName: string
 *   - ageGroup: '6-8' | '9-12' | '13-16'
 *   - totalXP: number
 *   - createdAt: timestamp
 *   - /progress/{lessonId}
 *       - completedAt: timestamp
 *       - score: number
 *       - stars: number (0-3)
 *       - attempts: number
 *
 * /lessons/{lessonId}          ← admin-managed content
 *   - title: string
 *   - ageGroup: string
 *   - category: string
 *   - questions: array
 *   - xp: number
 *   - isPublished: boolean
 *   - createdAt: timestamp
 *   - updatedAt: timestamp
 *
 * /leaderboard/{weekId}
 *   - entries: [{userId, displayName, xp}]
 */

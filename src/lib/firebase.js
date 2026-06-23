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

// Avoid re-initializing on hot reload
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const auth = getAuth(app);

// Analytics only in browser
export const getAnalyticsInstance = async () => {
  if (await isSupported()) {
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

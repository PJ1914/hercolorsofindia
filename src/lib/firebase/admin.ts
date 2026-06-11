import "server-only";
import * as admin from "firebase-admin";

const formatPrivateKey = (key: string) => {
  return key.replace(/\\n/g, "\n");
};

if (!admin.apps.length) {
  try {
    if (process.env.FIREBASE_PROJECT_ID) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY
            ? formatPrivateKey(process.env.FIREBASE_PRIVATE_KEY)
            : undefined,
        }),
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      });
    }
  } catch (error) {
    console.error("Firebase admin initialization error", error);
  }
}

// During Vercel build phase, env vars might be missing.
// We export null or dummy objects so the module evaluation doesn't crash.
export const adminDb = admin.apps.length ? admin.firestore() : {
  collection: () => ({
    get: async () => ({ size: 0, docs: [] }),
    add: async () => ({ id: "mock-id" })
  })
} as any;

export const adminAuth = admin.apps.length ? admin.auth() : {} as any;
export const adminStorage = admin.apps.length ? admin.storage() : {} as any;

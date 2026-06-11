import "server-only";
import { adminDb } from "./admin";
import { Product, Artisan, Homepage, Settings } from "@/types";

export async function getPublishedProducts(): Promise<Product[]> {
  const snapshot = await adminDb
    .collection("products")
    .where("status", "==", "published")
    .orderBy("displayOrder", "asc")
    .get();
    
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const snapshot = await adminDb
    .collection("products")
    .where("slug", "==", slug)
    .limit(1)
    .get();
    
  if (snapshot.empty) return null;
  
  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() } as Product;
}

export async function getAllArtisans(): Promise<Artisan[]> {
  const snapshot = await adminDb
    .collection("artisans")
    .get();
    
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Artisan[];
}

export async function getArtisanBySlug(slug: string): Promise<Artisan | null> {
  const snapshot = await adminDb
    .collection("artisans")
    .where("slug", "==", slug)
    .limit(1)
    .get();
    
  if (snapshot.empty) return null;
  
  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() } as Artisan;
}

export async function getHomepageContent(): Promise<Homepage | null> {
  const docRef = adminDb.collection("homepage").doc("content");
  const docSnap = await docRef.get();
  
  if (!docSnap.exists) return null;
  
  return { id: docSnap.id, ...docSnap.data() } as Homepage;
}

export async function getSettings(): Promise<Settings | null> {
  const docRef = adminDb.collection("settings").doc("global");
  const docSnap = await docRef.get();
  
  if (!docSnap.exists) return null;
  
  return { id: docSnap.id, ...docSnap.data() } as Settings;
}

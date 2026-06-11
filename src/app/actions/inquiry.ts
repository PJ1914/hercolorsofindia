"use server";

import { adminDb } from "@/lib/firebase/admin";
import { inquirySchema } from "@/lib/validations";
import * as z from "zod";

export async function submitInquiry(data: z.infer<typeof inquirySchema>) {
  try {
    // 1. Validate payload
    const parsedData = inquirySchema.parse(data);

    // 2. Insert into Firestore
    const docRef = await adminDb.collection("inquiries").add({
      ...parsedData,
      status: "New",
      createdAt: Date.now(),
    });

    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    if (error instanceof z.ZodError) {
      return { success: false, message: "Validation failed", errors: error.flatten().fieldErrors };
    }
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}

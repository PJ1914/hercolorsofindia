import * as z from "zod";

export const productSchema = z.object({
  slug: z.string().min(1, "Slug is required"),
  name: z.string().min(1, "Name is required"),
  shortDescription: z.string().min(1, "Short description is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  fabricType: z.string().min(1, "Fabric type is required"),
  artisanId: z.string().min(1, "Artisan is required"),
  featured: z.boolean().default(false),
  displayOrder: z.coerce.number().default(0),
  priceDisplay: z.string().min(1, "Price display is required"),
  galleryImages: z.array(z.string()).min(1, "At least one image is required"),
  materials: z.array(z.string()).min(1, "At least one material is required"),
  careInstructions: z.string().min(1, "Care instructions are required"),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  status: z.enum(["published", "draft"]).default("draft"),
});

export const artisanSchema = z.object({
  slug: z.string().min(1, "Slug is required"),
  name: z.string().min(1, "Name is required"),
  biography: z.string().min(1, "Biography is required"),
  location: z.string().min(1, "Location is required"),
  experience: z.string().min(1, "Experience is required"),
  craftSpecialty: z.string().min(1, "Craft specialty is required"),
  gallery: z.array(z.string()).default([]),
  productsCreated: z.array(z.string()).default([]),
  story: z.string().min(1, "Story is required"),
});

export const inquirySchema = z.object({
  productId: z.string().min(1, "Product ID is required"),
  customerName: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// We only define Zod schemas for the creation/update forms. 
// Status and createdAt are handled by the server.

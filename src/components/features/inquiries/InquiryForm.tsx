"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { inquirySchema } from "@/lib/validations";
import { submitInquiry } from "@/app/actions/inquiry";

type InquiryFormValues = z.infer<typeof inquirySchema>;

export function InquiryForm({ productId, productName }: { productId: string, productName: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      productId,
    },
  });

  const onSubmit = async (data: InquiryFormValues) => {
    setIsSubmitting(true);
    setErrorMsg("");
    
    const result = await submitInquiry(data);
    
    if (result.success) {
      setIsSuccess(true);
    } else {
      setErrorMsg(result.message || "Something went wrong.");
    }
    
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="bg-primary/10 border border-primary text-primary-foreground p-6 rounded-md text-center">
        <h3 className="font-serif text-2xl font-bold mb-2 text-primary">Thank You!</h3>
        <p className="text-foreground/80">Your inquiry for the {productName} has been received. Our artisan liaison will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {errorMsg && (
        <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
          {errorMsg}
        </div>
      )}

      <div>
        <label htmlFor="customerName" className="block text-sm font-medium mb-1">Full Name</label>
        <input
          {...register("customerName")}
          id="customerName"
          className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.customerName && <p className="text-destructive text-xs mt-1">{errors.customerName.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
        <input
          {...register("email")}
          id="email"
          type="email"
          className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number (Optional)</label>
        <input
          {...register("phone")}
          id="phone"
          type="tel"
          className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          placeholder={`I'm interested in the ${productName}...`}
          className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
        {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}

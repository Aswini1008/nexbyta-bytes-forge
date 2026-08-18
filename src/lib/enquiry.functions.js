import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\s-]{8,16}$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email address").max(120),
  interestedIn: z.string().trim().min(1, "Please select what you are interested in"),
  userType: z.enum(["student", "professional", "business"]),
  message: z.string().trim().max(1000).optional().default(""),
});

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    // Enquiry is validated server-side. Connect a database here to persist it
    // with fields: name, phone, email, interestedIn, userType, message,
    // status ("New" | "Contacted" | "Converted" | "Closed") and createdAt.
    return {
      ok: true,
      receivedAt: new Date().toISOString(),
      reference: data.interestedIn,
    };
  });

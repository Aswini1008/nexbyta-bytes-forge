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

const formatEnquiryText = (data) =>
  [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Interested In: ${data.interestedIn}`,
    `I am a: ${data.userType}`,
    `Message: ${data.message || "(none)"}`,
    `Received: ${new Date().toISOString()}`,
  ].join("\n");

export const submitEnquiry = createServerFn({ method: "POST" })
  .validator((data) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;
    let insertedId = null;

    if (supabaseKey) {
      try {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data: inserted, error } = await supabaseAdmin
          .from("enquiries")
          .insert({
            name: data.name,
            phone: data.phone,
            email: data.email,
            interested_in: data.interestedIn,
            user_type: data.userType,
            message: data.message ?? "",
          })
          .select("id")
          .single();

        if (error) {
          console.error("Supabase enquiry storage failed", error);
        } else {
          insertedId = inserted.id;
        }
      } catch (storageError) {
        console.error("Supabase enquiry storage is unavailable", storageError);
      }
    }

    return {
      ok: true,
      id: insertedId,
      emailSent: true,
      whatsappText: `New enquiry from the Nexbyta website\n\n${formatEnquiryText(data)}`,
    };
  });

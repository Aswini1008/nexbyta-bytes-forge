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
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { sendEnquiryEmail, formatEnquiryText } = await import("./notify.server");

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
      console.error("Failed to store enquiry", error);
      throw new Error("Could not save your enquiry. Please try again.");
    }

    let emailSent = false;
    let notifyError = null;
    try {
      await sendEnquiryEmail(data);
      emailSent = true;
    } catch (mailError) {
      notifyError = mailError instanceof Error ? mailError.message : "Unknown email error";
      console.error("Enquiry email failed", notifyError);
    }

    await supabaseAdmin
      .from("enquiries")
      .update({ email_sent: emailSent, notify_error: notifyError })
      .eq("id", inserted.id);

    return {
      ok: true,
      id: inserted.id,
      emailSent,
      whatsappText: `New enquiry from the Nexbyta website\n\n${formatEnquiryText(data)}`,
    };
  });

import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import Button from "./Button";
import { interestOptions } from "../data/site";

const initial = {
  name: "",
  phone: "",
  email: "",
  interestedIn: "",
  userType: "student",
  message: "",
};

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[0-9+\s-]{8,16}$/.test(values.phone.trim())) errors.phone = "Please enter a valid phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!values.interestedIn) errors.interestedIn = "Please select what you are interested in.";
  return errors;
}

export default function EnquiryForm({ submitFn, defaultInterest = "", tone = "dark" }) {
  const send = useServerFn(submitFn);
  const [values, setValues] = useState({ ...initial, interestedIn: defaultInterest });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [whatsappLink, setWhatsappLink] = useState("");

  const light = tone === "light";
  const fieldClass = `w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
    light
      ? "border-ink/15 bg-surface-light text-ink placeholder:text-ink/40 focus:border-indigo"
      : "border-border bg-[var(--card)] text-foreground placeholder:text-muted-foreground focus:border-cyan"
  }`;
  const labelClass = `mb-2 block text-sm font-medium ${light ? "text-ink" : "text-foreground"}`;

  const update = (key) => (event) => setValues((v) => ({ ...v, [key]: event.target.value }));

  async function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    try {
      await send({ data: { ...values, name: values.name.trim(), email: values.email.trim() } });
      setStatus("success");
      setValues({ ...initial, interestedIn: defaultInterest });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className={`flex flex-col items-start gap-3 rounded-2xl border p-8 ${
          light ? "border-ink/10 bg-surface-soft text-ink" : "border-border bg-[var(--card)]"
        }`}
      >
        <CheckCircle2 className="size-8 text-cyan" aria-hidden="true" />
        <h3 className="text-lg font-semibold">Thank you! Your enquiry has been submitted successfully.</h3>
        <p className={`text-sm ${light ? "text-ink/70" : "text-muted-foreground"}`}>
          Our team will contact you shortly with the details you asked for.
        </p>
        <Button as="button" type="button" variant={light ? "light" : "outline"} onClick={() => setStatus("idle")}>
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">Full Name</label>
          <input id="name" name="name" className={fieldClass} value={values.name} onChange={update("name")}
            aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Your name" autoComplete="name" />
          {errors.name && <p id="name-error" className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" className={fieldClass} value={values.phone} onChange={update("phone")}
            aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder="+91 XXXXX XXXXX" autoComplete="tel" />
          {errors.phone && <p id="phone-error" className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="email">Email</label>
        <input id="email" name="email" type="email" className={fieldClass} value={values.email} onChange={update("email")}
          aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined}
          placeholder="you@example.com" autoComplete="email" />
        {errors.email && <p id="email-error" className="mt-1 text-xs text-destructive">{errors.email}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="interestedIn">Interested In</label>
          <select id="interestedIn" name="interestedIn" className={fieldClass} value={values.interestedIn}
            onChange={update("interestedIn")} aria-invalid={Boolean(errors.interestedIn)}
            aria-describedby={errors.interestedIn ? "interest-error" : undefined}>
            <option value="">Select an option</option>
            {interestOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.interestedIn && <p id="interest-error" className="mt-1 text-xs text-destructive">{errors.interestedIn}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="userType">I am a</label>
          <select id="userType" name="userType" className={fieldClass} value={values.userType} onChange={update("userType")}>
            <option value="student">Student / Learner</option>
            <option value="professional">Working Professional</option>
            <option value="business">Business / Client</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} className={fieldClass} value={values.message}
          onChange={update("message")} placeholder="Tell us what you are looking for" />
      </div>

      {status === "error" && (
        <p role="alert" className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="size-4" aria-hidden="true" />
          Something went wrong. Please try again.
        </p>
      )}

      <Button as="button" type="submit" variant={light ? "primary" : "accent"} disabled={status === "loading"}>
        {status === "loading" && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {status === "loading" ? "Submitting..." : "Submit Enquiry"}
      </Button>
    </form>
  );
}

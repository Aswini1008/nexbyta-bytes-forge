import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { Section, SectionHeading } from "../components/Section";
import Button from "../components/Button";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Team Sign In | Nexbyta Technologies" },
      { name: "description", content: "Sign in to the Nexbyta Technologies enquiry dashboard." },
      { property: "og:title", content: "Team Sign In | Nexbyta Technologies" },
      { property: "og:description", content: "Internal sign in for the Nexbyta enquiry dashboard." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("signin");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const field =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-cyan";

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const action =
      mode === "signin"
        ? supabase.auth.signInWithPassword({ email, password })
        : supabase.auth.signUp({
            email,
            password,
            options: { emailRedirectTo: `${window.location.origin}/admin` },
          });
    const { error: authError } = await action;
    setLoading(false);
    if (authError) {
      setError(authError.message);
      return;
    }
    navigate({ to: "/admin" });
  }

  return (
    <Section tone="dark" className="pt-16">
      <SectionHeading
        eyebrow="Team access"
        title="Enquiry Dashboard Sign In"
        subtitle="Only Nexbyta team accounts with admin access can view enquiries."
      />
      <form onSubmit={onSubmit} className="mx-auto max-w-md card-glass space-y-4 rounded-2xl p-6 sm:p-8">
        <div>
          <label className="mb-2 block text-sm font-medium" htmlFor="admin-email">Email</label>
          <input id="admin-email" type="email" required className={field} value={email}
            onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium" htmlFor="admin-password">Password</label>
          <input id="admin-password" type="password" required minLength={6} className={field} value={password}
            onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
        </div>
        {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
        <Button as="button" type="submit" variant="accent" disabled={loading}>
          {loading ? "Please wait..." : mode === "signin" ? "Sign In" : "Create Account"}
        </Button>
        <button
          type="button"
          className="block text-sm text-muted-foreground underline-offset-4 hover:text-cyan hover:underline"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
        >
          {mode === "signin" ? "Need an account? Create one" : "Already have an account? Sign in"}
        </button>
      </form>
    </Section>
  );
}

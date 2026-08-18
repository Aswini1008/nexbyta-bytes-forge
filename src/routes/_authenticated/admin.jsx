import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, RefreshCw, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Section, SectionHeading } from "../../components/Section";
import Button from "../../components/Button";
import { deleteEnquiry, listEnquiries, updateEnquiryStatus } from "../../lib/admin.functions";

const statuses = ["New", "Contacted", "Converted", "Closed"];

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Enquiry Dashboard | Nexbyta Technologies" },
      { name: "description", content: "Manage incoming Nexbyta Technologies enquiries." },
      { property: "og:title", content: "Enquiry Dashboard | Nexbyta Technologies" },
      { property: "og:description", content: "Internal dashboard for managing website enquiries." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const navigate = useNavigate();
  const fetchList = useServerFn(listEnquiries);
  const setStatus = useServerFn(updateEnquiryStatus);
  const removeEnquiry = useServerFn(deleteEnquiry);

  const [rows, setRows] = useState([]);
  const [state, setState] = useState("loading");
  const [error, setError] = useState("");

  async function load() {
    setState("loading");
    try {
      const result = await fetchList();
      setRows(result.enquiries);
      setState("ready");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not load enquiries");
      setState("error");
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel("enquiries-admin")
      .on("postgres_changes", { event: "*", schema: "public", table: "enquiries" }, () => load())
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onStatusChange(id, status) {
    setRows((current) => current.map((row) => (row.id === id ? { ...row, status } : row)));
    await setStatus({ data: { id, status } });
  }

  async function onDelete(id) {
    setRows((current) => current.filter((row) => row.id !== id));
    await removeEnquiry({ data: { id } });
  }

  async function onSignOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  }

  return (
    <Section tone="dark" className="pt-16">
      <SectionHeading
        eyebrow="Admin"
        title="Enquiry Dashboard"
        subtitle="Every enquiry submitted on the website appears here in real time."
      />

      <div className="mb-6 flex flex-wrap gap-3">
        <Button as="button" type="button" variant="outline" onClick={load}>
          <RefreshCw className="size-4" aria-hidden="true" /> Refresh
        </Button>
        <Button as="button" type="button" variant="ghost" onClick={onSignOut}>
          Sign out
        </Button>
      </div>

      {state === "loading" && (
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Loading enquiries...
        </p>
      )}

      {state === "error" && (
        <div className="card-glass rounded-2xl p-6">
          <p className="text-sm text-destructive">{error}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            If this says permission denied, your account still needs admin access.
          </p>
        </div>
      )}

      {state === "ready" && rows.length === 0 && (
        <p className="text-sm text-muted-foreground">No enquiries yet.</p>
      )}

      {state === "ready" && rows.length > 0 && (
        <div className="card-glass overflow-x-auto rounded-2xl">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Received</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">Interested In</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-border/60 align-top">
                  <td className="px-4 py-3 text-muted-foreground">
                    {new Date(row.created_at).toLocaleString()}
                  </td>
                  <td className="px-4 py-3 font-medium">
                    {row.name}
                    <span className="block text-xs text-muted-foreground">{row.user_type}</span>
                  </td>
                  <td className="px-4 py-3">
                    <a href={`tel:${row.phone}`} className="hover:text-cyan">{row.phone}</a>
                    <span className="block text-xs text-muted-foreground">{row.email}</span>
                  </td>
                  <td className="px-4 py-3">{row.interested_in}</td>
                  <td className="max-w-xs px-4 py-3 text-muted-foreground">{row.message || "—"}</td>
                  <td className="px-4 py-3">
                    <select
                      aria-label={`Status for ${row.name}`}
                      className="rounded-lg border border-border bg-[var(--card)] px-2 py-1 text-xs"
                      value={row.status}
                      onChange={(event) => onStatusChange(row.id, event.target.value)}
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      type="button"
                      aria-label={`Delete enquiry from ${row.name}`}
                      className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-destructive"
                      onClick={() => onDelete(row.id)}
                    >
                      <Trash2 className="size-4" aria-hidden="true" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Section>
  );
}

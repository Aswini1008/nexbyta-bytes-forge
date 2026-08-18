// Server-only helpers for delivering a new enquiry to the company.

export const NOTIFY_EMAIL = "aravinthbalu15@gmail.com";

export function formatEnquiryText(data) {
  return [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Interested In: ${data.interestedIn}`,
    `I am a: ${data.userType}`,
    `Message: ${data.message || "(none)"}`,
  ].join("\n");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatEnquiryHtml(data) {
  const rows = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Interested In", data.interestedIn],
    ["I am a", data.userType],
    ["Message", data.message || "(none)"],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#1B2A6B">${label}</td><td style="padding:6px 12px">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<div style="font-family:Arial,Helvetica,sans-serif">
    <h2 style="color:#1B2A6B;margin-bottom:4px">New enquiry — Nexbyta Technologies</h2>
    <p style="color:#555;margin-top:0">Received ${new Date().toUTCString()}</p>
    <table style="border-collapse:collapse;background:#f6f8ff;border-radius:8px">${rows}</table>
  </div>`;
}

export async function sendEnquiryEmail(data) {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const resendKey = process.env["RESEND_API_KEY"];
  if (!lovableKey || !resendKey) {
    throw new Error("Email service is not configured");
  }

  const response = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": resendKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Nexbyta Website <onboarding@resend.dev>",
      to: [NOTIFY_EMAIL],
      reply_to: data.email,
      subject: `New enquiry: ${data.interestedIn} — ${data.name}`,
      text: formatEnquiryText(data),
      html: formatEnquiryHtml(data),
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error(`Resend request failed [${response.status}]: ${body}`);
    throw new Error(`Email delivery failed [${response.status}]: ${body}`);
  }

  return await response.json();
}

// Server-only helpers for delivering a new enquiry to the company.

export const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "nexbytatechnologies@gmail.com";

export function formatEnquiryText(data) {
  return [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Interested In: ${data.interestedIn}`,
    `I am a: ${data.userType}`,
    `Message: ${data.message || "(none)"}`,
    `Received: ${new Date().toISOString()}`,
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
    ["Received", new Date().toISOString()],
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

/**
 * sendEnquiryEmail
 * SMTP via Nodemailer (preferred for this change)
 * Required env vars (server-side): SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
 * Optional: SMTP_FROM (sender address), NOTIFY_EMAIL (recipient)
 */
export async function sendEnquiryEmail(data) {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || `Nexbyta Website <${process.env.SMTP_USER || "no-reply@yourdomain.com"}>`;
  const recipient = process.env.NOTIFY_EMAIL || NOTIFY_EMAIL;

  if (!host || !port || !user || !pass) {
    throw new Error("SMTP not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in the runtime environment.");
  }

  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const info = await transporter.sendMail({
      from,
      to: recipient,
      replyTo: data.email,
      subject: `New enquiry: ${data.interestedIn} — ${data.name}`,
      text: formatEnquiryText(data),
      html: formatEnquiryHtml(data),
    });

    return info;
  } catch (err) {
    console.error("SMTP send failed", err);
    throw new Error(`SMTP send failed: ${err instanceof Error ? err.message : String(err)}`);
  }
}

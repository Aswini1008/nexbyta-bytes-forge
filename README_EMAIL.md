EmailJS setup for the Nexbyta enquiry flow

Required browser environment variables:

- VITE_EMAILJS_PUBLIC_KEY          # public EmailJS key from the EmailJS dashboard
- VITE_EMAILJS_SERVICE_ID          # fixed Gmail service ID: service_pajcxxj
- VITE_EMAILJS_TEMPLATE_ID         # EmailJS template ID for the enquiry email template

Notes:
- EmailJS is the email provider for the enquiry form. The Gmail connection is configured in EmailJS, not in the website.
- The website must not store Gmail, SMTP, or Supabase secret keys in frontend code.
- Supabase may remain in the project for admin enquiry storage, but it must not be required to send the notification email.
- The EmailJS template must be configured to send to `nexbytatechnologies@gmail.com` and set Reply-To to `{{email}}`.

Template variables to include in the EmailJS template:
- `{{name}}`
- `{{phone}}`
- `{{email}}`
- `{{interest}}`
- `{{user_type}}`
- `{{message}}`
- `{{time}}`

Verification steps:
1. Add the EmailJS public key and template ID to the environment variables.
2. Submit the enquiry form locally or via the deployed site.
3. Confirm EmailJS returns success and the email arrives at `nexbytatechnologies@gmail.com`.
4. If Supabase storage is enabled, keep it as a secondary record only and do not block the EmailJS email.

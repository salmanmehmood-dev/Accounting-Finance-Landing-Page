import { siteConfig } from "@/data/site-content";

interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export function generateEmailHtml({ firstName, lastName, email, message }: EmailData): string {
  // Using generic primary color from theme (approx #0F172A to #334155 for dark, but let's use a nice professional blue)
  // Actually, let's use the site's brand color. We'll hardcode a nice blue that matches the "Blue Lagoon" vibe.
  const primaryColor = "#2563EB"; // Example blue
  const secondaryColor = "#1E293B"; // Dark slate
  const backgroundColor = "#F8FAFC";
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>New Inquiry | ${siteConfig.general.name}</title>
  <style>
    body { margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: ${backgroundColor}; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
    .header { background-color: ${secondaryColor}; padding: 30px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px; }
    .content { padding: 40px 30px; color: #334155; line-height: 1.6; }
    .badge { display: inline-block; padding: 6px 12px; background-color: ${primaryColor}15; color: ${primaryColor}; border-radius: 99px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 20px; }
    .field-group { margin-bottom: 24px; }
    .label { display: block; font-size: 12px; color: #64748B; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 8px; }
    .value { font-size: 16px; color: #0F172A; font-weight: 500; }
    .message-box { background-color: #F8FAFC; border-left: 4px solid ${primaryColor}; padding: 20px; border-radius: 4px; color: #334155; }
    .footer { background-color: #F1F5F9; padding: 20px; text-align: center; color: #94A3B8; font-size: 12px; }
    a { color: ${primaryColor}; text-decoration: none; }
  </style>
</head>
<body style="background-color: ${backgroundColor}; padding: 40px 0;">
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>${siteConfig.general.name}</h1>
    </div>

    <!-- Body -->
    <div class="content">
      <div style="text-align: center;">
        <span class="badge">New Inquiry Received</span>
      </div>
      
      <div style="margin-top: 30px;">
        <div class="field-group">
          <span class="label">From</span>
          <div class="value">${firstName} ${lastName}</div>
          <div style="color: #64748B; font-size: 14px; margin-top: 4px;">&lt;${email}&gt;</div>
        </div>

        <div class="field-group">
          <span class="label">Message</span>
          <div class="message-box">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} ${siteConfig.general.name}. All rights reserved.</p>
      <p>This message was sent securely from your website contact form.</p>
    </div>
  </div>
</body>
</html>
  `;
}

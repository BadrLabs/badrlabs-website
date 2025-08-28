import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const NODE_ENV = process.env.NODE_ENV;

  const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 587,
    secure: false,
    auth: {
      user:
        NODE_ENV === "development"
          ? "harun@badrlabs.com"
          : process.env.PRIVATE_EMAIL_USER,
      pass:
        NODE_ENV === "development"
          ? "harun-pwd-123"
          : process.env.PRIVATE_EMAIL_PASSWORD,
    },
  });

  // Send to you
  await transporter.sendMail({
    from: "harun@badrlabs.com",
    to: "harun@badrlabs.com",
    subject: "New Contact Form Submission",
    html: `
			<p style="font-family:Arial, sans-serif; font-size:16px; color:#333; margin-bottom: 20px;">${body.message}</p>
			<table border="0" cellpadding="8" cellspacing="0" width="100%" style="border-collapse:collapse; font-family:Arial, sans-serif; font-size:14px; color:#333;">
				<tr style="background-color:#f4f4f4;">
					<td style="border:1px solid #ddd; font-weight:bold; width:150px;">First Name</td>
					<td style="border:1px solid #ddd;">${body.firstName}</td>
				</tr>
				<tr>
					<td style="border:1px solid #ddd; font-weight:bold;">Last Name</td>
					<td style="border:1px solid #ddd;">${body.lastName}</td>
				</tr>
				<tr style="background-color:#f9f9f9;">
					<td style="border:1px solid #ddd; font-weight:bold;">Email</td>
					<td style="border:1px solid #ddd;">${body.email}</td>
				</tr>
				<tr>
					<td style="border:1px solid #ddd; font-weight:bold;">Company</td>
					<td style="border:1px solid #ddd;">${body.company}</td>
				</tr>
				<tr style="background-color:#f9f9f9;">
					<td style="border:1px solid #ddd; font-weight:bold;">Project Type</td>
					<td style="border:1px solid #ddd;">${body.projectType}</td>
				</tr>
				<tr>
					<td style="border:1px solid #ddd; font-weight:bold;">Budget</td>
					<td style="border:1px solid #ddd;">${body.budget}</td>
				</tr>
			</table>
`,
  });

  // Send confirmation to client
  await transporter.sendMail({
    from: "harun@badrlabs.com",
    to: body.email,
    subject: "Thanks for contacting Badr Labs",
    text: `
Hi ${body.firstName} ${body.lastName},

Thank you for reaching out to Badrlabs! We'll get back to you within 24 hours.

Best regards,
Badrlabs Team
    `,
  });

  return { success: true };
});

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", process.env.FRONTEND_URL || "*");

  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");

  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only POST is allowed
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, phone, course, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Website <info@example.com>",
      to: ["YOUR_EMAIL@example.com"],
      replyTo: email,
      subject: `New contact message from ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">

          <h2>New Contact Form Message</h2>

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Phone:</strong>
            ${phone || "Not provided"}
          </p>

          <p>
            <strong>Course:</strong>
            ${course || "Not selected"}
          </p>

          <hr />

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message}
          </p>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to send email.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
}

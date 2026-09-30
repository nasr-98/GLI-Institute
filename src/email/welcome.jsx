import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Preview,
} from "@react-email/components";

export default function ContactConfirmationEmail({ name = "Customer" }) {
  return (
    <Html>
      <Head />
      <Preview>We've received your message. Thank you for contacting us.</Preview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.heading}>
            Thank You for Contacting Us!
          </Heading>

          <Text style={styles.text}>
            Hello {name},
          </Text>

          <Text style={styles.text}>
            We have successfully received your email and appreciate you taking
            the time to get in touch with us.
          </Text>

          <Text style={styles.text}>
            Our team will review your message and respond as soon as possible.
            If your inquiry requires immediate attention, please feel free to
            contact us through our other available channels.
          </Text>

          <Text style={styles.text}>
            Thank you for your interest and for reaching out. We look forward to
            assisting you.
          </Text>

          <Hr style={styles.divider} />

          <Text style={styles.footer}>
            Best regards,
            <br />
            The Support Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: "#f4f4f4",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: "20px 0",
  },
  container: {
    backgroundColor: "#ffffff",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "40px",
    borderRadius: "8px",
  },
  heading: {
    color: "#2563eb",
    fontSize: "28px",
    marginBottom: "24px",
  },
  text: {
    color: "#374151",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "16px",
  },
  divider: {
    borderColor: "#e5e7eb",
    margin: "24px 0",
  },
  footer: {
    color: "#6b7280",
    fontSize: "14px",
    lineHeight: "22px",
  },
};
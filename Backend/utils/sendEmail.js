import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use your SMTP provider,
      secure:true,
      port:465,
      auth: {
        user:"byash0720@gmail.com" , // Your email
        pass: "bigp npay rsbo vbkd"  // Your app password
      }
    });

    await transporter.sendMail({
      from: `"Asian Lab" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text
    });

    console.log("✅ Welcome email sent successfully");
  } catch (error) {
    console.error("❌ Failed to send email:", error);
  }
};

export default sendEmail;

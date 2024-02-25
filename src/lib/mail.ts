"use server";

import nodemailer from "nodemailer";

export type Email = {
  to: string;
  subject: string;
  body: string;
  html?: string;
};

const email = process.env.GOOGLE_EMAIL;
const password = process.env.GOOGLE_PASSWORD;
const domain = process.env.NEXT_PUBLIC_APP_URL;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await transporter.sendMail({
    from: process.env.GOOGLE_EMAIL!,
    to: email,
    subject: "STVPS - The Club - Reset your password!",
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await transporter.sendMail({
    from: process.env.GOOGLE_EMAIL!,
    to: email,
    subject: "STVPS - The Club - Confirm your email!",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm your email address.</p>`,
  });
};

export async function sendTestEmail(recipient: string) {
  try {
    const mailOptions = {
      from: email,
      to: recipient,
      subject: "Test",
      text: "This is a test at " + new Date().toLocaleString(),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(info);
    return { message: "success" };
  } catch (e) {
    console.log(e);
    return { message: "error" };
  }
}

export async function sendEmail(emailData: Email) {
  try {
    const mailOptions = {
      from: email,
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.body,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(info);
    return { message: "success" };
  } catch (e) {
    console.log(e);
    return { message: "error" };
  }
}

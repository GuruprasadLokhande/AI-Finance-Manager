// import { Resend } from "resend";

// export async function sendEmail({ to, subject, react }) {
//   const resend = new Resend(process.env.RESEND_API_KEY || "");

//   try {
//     const data = await resend.emails.send({
//       from: "Finance App <onboarding@resend.dev>",
//       to,
//       subject,
//       react,
//     });
//     return { success: true, data };
//   } catch (error) {
//     console.error("Error to send email:", error);
//     return { success: false, error };
//   }
// }

// await resend.emails.send({
//   from: "Acme <onboarding@resend.dev>",
//   to: ["delivered@resend.dev"],
//   subject: "Hello world",
//   react: EmailTemplate({ firstName: "John" }),
// });


"use server";

import { Resend } from "resend";

export async function sendEmail({ to, subject, react }) {
  const resend = new Resend(process.env.RESEND_API_KEY || "");

  try {
    const data = await resend.emails.send({
      from: "Finance App <onboarding@resend.dev>",
      to,
      subject,
      react,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}
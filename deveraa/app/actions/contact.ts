'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  try {
    // Resend ab { data, error } return karta hai
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Isko strictly yahi rakhna hai testing ke liye
      to: 'himanshukumbhare98@gmail.com', // Yahan wahi email hona chahiye jisse Resend pe account banaya hai
      subject: `New Project Inquiry from ${name}`,
      html: `
        <h2>New Project Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Agar Resend ki taraf se koi error aaya (Jaise wrong API key, wrong email)
    if (error) {
      console.error("Resend API Error:", error);
      return { success: false, message: error.message }; // Frontend par exact error dikhayega
    }

    return { success: true };
  } catch (error) {
    // Agar server ya network ka koi error aaya
    console.error("Server Error:", error);
    return { success: false, message: 'Failed to send email due to server error.' };
  }
}
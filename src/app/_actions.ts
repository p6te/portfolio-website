"use server";

import { z } from "zod";
import { Resend } from "resend";
import { ContactFormSchema } from "@/lib/schema";
import ContactFormEmail from "@/emails/ContactFormEmail";
import ContactNotification from "@/emails/ContactNotification";

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.success) {
    const { name, email, message } = result.data;
    try {
      await resend.emails.send({
        from: "piotr-matlak-contact@peter-dev.site",
        to: [`${email}`],
        subject: "Contact form submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: ContactFormEmail({ name, email, message }),
      });

      await resend.emails.send({
        from: "piotr-matlak-contact@peter-dev.site",
        to: [`piotr.matlak.contact@gmail.com`],
        subject: "Contact form <Peter/>",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: ContactNotification({ name, email, message }),
      });

      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}

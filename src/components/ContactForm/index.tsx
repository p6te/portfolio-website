"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactFormSchema } from "@/lib/schema";
import { sendEmail } from "@/app/_actions";
import { toast } from "sonner";
import Button from "../common/Button";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data);

    if (result?.success) {
      toast.success("Email sent!");
      reset();
      return;
    }

    // toast error
    console.log(result?.error);
    toast.error("Something went wrong!");
  };

  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className="mx-auto flex  w-3/4 flex-1 flex-col gap-4 text-gray-600  "
    >
      <div>
        <label className="text-gray-400">
          Name/Company
          <input
            className="w-full rounded-full border-none bg-white   bg-opacity-10  px-4 py-3  text-white outline-none backdrop-blur"
            {...register("name")}
          />
        </label>
        {errors.name?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className="text-gray-400">
          Email
          <input
            className="w-full rounded-full border-none bg-white   bg-opacity-10  px-4 py-3  text-white outline-none backdrop-blur"
            {...register("email")}
          />
        </label>
        {errors.email?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="text-gray-400">
          Message
          <textarea
            rows={5}
            cols={5}
            className="w-full rounded-3xl border-none bg-white   bg-opacity-10  px-4 py-3  text-white outline-none backdrop-blur"
            {...register("message")}
          />
        </label>
        {errors.message?.message && (
          <p className="ml-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      <Button disabled={isSubmitting} outline type="submit">
        {isSubmitting ? "Sending..." : "Send"}
      </Button>
      <div className="mt-6">
        <span className=" font-extralight text-white">
          Or contact directly to:
        </span>
        <br />
        <span className="text-white">piotr.matlak.contact@gmail.com</span>
      </div>
    </form>
  );
}

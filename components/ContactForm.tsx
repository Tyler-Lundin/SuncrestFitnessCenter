"use client";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

const SITE_KEY: string = "6Ld3LvUlAAAAABxQOoQgkDujmTIUVFmOEkGCZIZg";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const onChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const onSubmit = async (data: any) => {
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  if (isSubmitSuccessful)
    return (
      <div className="py-16 h-full text-center">
        <h1 className="text-2xl font-black">Thank you for your message!</h1>
        <p className="text-lg">We will get back to you as soon as possible.</p>
      </div>
    );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${isSubmitting && "animate-pulse"}`}
    >
      <h1 style={bebasNeue.style} className="mb-2 border-b border-black">
        Send a Message{" "}
      </h1>
      <div className="grid gap-4">
        {errors.name ? (
          <span className="font-black text-red-500">Name is required</span>
        ) : (
          <label htmlFor="firstName" className="text-black">
            Name
          </label>
        )}
        <input
          {...register("name", { required: true })}
          className="p-2 rounded-md border-2 border-black bg-base-200"
        />

        {errors.email ? (
          <span className="font-black text-red-500">Email is required</span>
        ) : (
          <label htmlFor="email" className="text-black">
            Email
          </label>
        )}
        <input
          {...register("email", { required: true })}
          className="p-2 rounded-md border-2 border-black bg-base-200"
        />

        {errors.phone ? (
          <span className="font-black text-red-500">Phone is required</span>
        ) : (
          <label htmlFor="phone" className="text-black">
            Phone
          </label>
        )}
        <input
          {...register("phone", { required: true })}
          className="p-2 rounded-md border-2 border-black bg-base-200"
        />

        {errors.message ? (
          <span className="font-black text-red-500">Message is required</span>
        ) : (
          <label htmlFor="message" className="text-black">
            Message
          </label>
        )}
        <textarea
          {...register("message", { required: true })}
          className="p-2 rounded-md border-2 border-black bg-base-200"
        />
        <ReCAPTCHA sitekey={SITE_KEY} onChange={onChange} />
      </div>
      <button
        type="submit"
        disabled={!captchaToken}
        className="mt-8 text-white rounded-lg btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
}

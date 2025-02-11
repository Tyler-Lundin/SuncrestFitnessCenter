"use client";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

import { Bebas_Neue } from "next/font/google";
import Logo from "./Logo";

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
        <span className="grid place-content-center p-2 bg-black md:rounded-md">
          <span className="invert">
            <Logo />
          </span>
        </span>
        <h1 className="text-2xl font-black">Thank you for your message!</h1>
        <p className="text-lg">We will get back to you as soon as possible.</p>
      </div>
    );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${isSubmitting && "animate-pulse"} p-4 rounded-lg bg-white/75 mb-8`}
    >
      <span className="grid gap-2">
        <span className="grid place-content-center p-2 bg-black">
          <span className="invert">
            <Logo />
          </span>
        </span>
        <h1 style={bebasNeue.style} className="mb-2 border-b border-black">
          Send a Message{" "}
        </h1>
      </span>
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

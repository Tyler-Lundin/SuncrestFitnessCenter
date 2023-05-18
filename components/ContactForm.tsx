'use client';
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const SITE_KEY: string = '6LcNUfUlAAAAAG81lv3NIl1D71W74CLuoq3kDzii'

export default function ContactForm() {

  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const onChange = (token: string | null) => {
    setCaptchaToken(token);
  }

  const onSubmit = async (data: any) => {
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  if (isSubmitSuccessful) return (
    <div className='text-center'>
      <h1 className='text-2xl font-black'>Thank you for your message!</h1>
      <p className='text-lg'>We will get back to you as soon as possible.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${isSubmitting && 'animate-pulse'}`}>
      <div className='grid gap-4'>
        {errors.name ? (
          <span className='text-red-500 font-black'>Name is required</span>
        ) : (
          <label htmlFor='firstName' className='text-black'>Name</label>
        )}
        <input
          {...register("name", { required: true })}
          className='border-2 border-black rounded-md p-2 bg-base-200'
        />

        {errors.email ? (
          <span className='text-red-500 font-black'>Email is required</span>
        ) : (
          <label htmlFor='email' className='text-black'>Email</label>
        )}
        <input
          {...register("email", { required: true })}
          className='border-2 border-black rounded-md p-2 bg-base-200'
        />

        {errors.phone ? (
          <span className='text-red-500 font-black'>Phone is required</span>
        ) : (
          <label htmlFor='phone' className='text-black'>Phone</label>
        )}
        <input
          {...register("phone", { required: true })}
          className='border-2 border-black rounded-md p-2 bg-base-200'
        />

        {errors.message ? (
          <span className='text-red-500 font-black'>Message is required</span>
        ) : (
          <label htmlFor='message' className='text-black'>Message</label>
        )}
        <textarea
          {...register("message", { required: true })}
          className='border-2 border-black rounded-md p-2 bg-base-200'
        />
        <ReCAPTCHA sitekey={SITE_KEY} onChange={onChange} />
      </div>
      <button type="submit" disabled={!captchaToken} className='btn btn-primary mt-8 text-white rounded-lg'>Submit</button>
    </form>
  )
}

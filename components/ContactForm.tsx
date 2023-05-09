'use client';

import { useForm } from "react-hook-form";



export default function ContactForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=''>
      <div className='grid gap-4'>
        {errors.name ? (
          <span className='text-red-500 font-black'>Name is required</span>
        ) : (
          <label htmlFor='firstName' className='text-black'>Name</label>
        )}
        <input {...register("name", { required: true })} className='border-2 border-black rounded-md p-2 bg-base-200' />

        {errors.email ? (
          <span className='text-red-500 font-black'>Email is required</span>
        ) : (
          <label htmlFor='email' className='text-black'>Email</label>
        )}
        <input {...register("email", { required: true })} className='border-2 border-black rounded-md p-2 bg-base-200' />

        {errors.phone ? (
          <span className='text-red-500 font-black'>Phone is required</span>
        ) : (
          <label htmlFor='phone' className='text-black'>Phone</label>
        )}
        <input {...register("phone", { required: true })} className='border-2 border-black rounded-md p-2 bg-base-200' />

        {errors.message ? (
          <span className='text-red-500 font-black'>Message is required</span>
        ) : (
          <label htmlFor='message' className='text-black'>Message</label>
        )}
        <textarea {...register("message", { required: true })} className='border-2 border-black rounded-md p-2 bg-base-200' />

      </div>
      <button type="submit" className='btn btn-primary mt-8 text-white rounded-lg'>Submit</button>
    </form>
  )
}

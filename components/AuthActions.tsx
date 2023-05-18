'use client';
import { signOut, signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";

export function Signout() {
  return (
    <button onClick={() => signOut()} className='font-light hover:font-black text-red-500 text-sm transition-all ease-in-out duration-300' key={`signout-link`}>  Sign Out </button>
  )
}

export function Signin() {
  return (
    <button onClick={() => signIn()} className='hover:font-black font-light text-xl transition-all ease-in-out duration-300' key={`signin-link`}>  Sign In </button>
  )
}

export function SignInWithGoogle() {

  return (
    <button onClick={() => signIn('google')} className='hover:bg-base-200 flex items-center gap-4 bg-base-100 p-3 rounded-md font-light text-xl transition-all ease-in-out duration-300' key={`signin-link`}>  Sign In With Google <BsGoogle /> </button>
  )
}

type formValues = {
  email: string
}

export function SignInWithEmail() {
  const { register, getValues, handleSubmit, formState: { errors, isLoading, isValid } } = useForm<formValues>()

  const onSubmit: SubmitHandler<formValues> = async (data) => {
    const { email } = data
    try {
      await signIn('email', { email })
    } catch (error: any) {
      console.log(error)
      alert('Error signing in');
    }
  }


  return (
    <form
      method='post'
      onSubmit={handleSubmit(onSubmit)}
      className='border-black border-4 font-light p-3 bg-base-200 rounded-md text-xl grid gap-4 justify-center transition-all ease-in-out duration-300' key={`signin-link`}>
      <label htmlFor='email' className='font-thin text-center'>Sign in with Email</label>
      {errors.email && (
        <span className='text-red-500 text-center'> Email Required </span>
      )}
      <input {...register("email", { required: true })} placeholder="email" className='p-3 rounded-md' />
      <button disabled={!isValid} className='btn-primary px-3 py-1 rounded-md disabled:opacity-70 transition-opacity' type="submit">Sign In</button>
    </form>
  )
}


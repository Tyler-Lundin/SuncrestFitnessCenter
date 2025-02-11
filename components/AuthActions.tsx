"use client";
import { signOut, signIn } from "next-auth/react";
import { Bebas_Neue } from "next/font/google";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

export function Signout() {
  return (
    <button
      onClick={() => signOut()}
      className="text-sm font-light text-red-500 transition-all duration-300 ease-in-out hover:font-black"
      key={`signout-link`}
    >
      {" "}
      Sign Out{" "}
    </button>
  );
}

export function Signin() {
  return (
    <button
      onClick={() => signIn()}
      className="text-xl font-light transition-all duration-300 ease-in-out hover:font-black"
      key={`signin-link`}
    >
      {" "}
      Sign In{" "}
    </button>
  );
}

export function SignInWithGoogle() {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex gap-4 items-center p-3 text-xl font-light rounded-md transition-all duration-300 ease-in-out bg-base-100 hover:bg-base-200"
      key={`signin-link`}
    >
      {" "}
      Sign In With Google <BsGoogle />{" "}
    </button>
  );
}

type formValues = {
  email: string;
};

export function SignInWithEmail() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isLoading, isValid },
  } = useForm<formValues>();

  const onSubmit: SubmitHandler<formValues> = async (data) => {
    const { email } = data;
    try {
      await signIn("email", { email });
    } catch (error: any) {
      console.log(error);
      alert("Error signing in");
    }
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 justify-center p-3 mb-16 text-xl font-light rounded-md border-4 border-black transition-all duration-300 ease-in-out bg-base-200"
      key={`signin-link`}
    >
      <label htmlFor="email" className="text-center">
        Sign in with Email
      </label>
      {errors.email && (
        <span className="text-center text-red-500"> Email Required </span>
      )}
      <input
        {...register("email", { required: true })}
        placeholder="email"
        className="p-3 rounded-md border border-black"
      />

      <button
        style={bebasNeue.style}
        disabled={!isValid}
        className="flex z-50 gap-4 items-center p-3 w-full text-xl tracking-wide text-white whitespace-nowrap rounded-lg transition-all duration-500 md:text-4xl hover:bg-green-600 bg-green-600/80 group"
        type="submit"
      >
        Sign In
        <span className="relative w-full h-full">
          <AiOutlineArrowRight className="absolute left-0 top-1/2 transition-all duration-500 -translate-y-1/2 group-hover:left-full group-hover:-translate-x-full" />
        </span>
      </button>
    </form>
  );
}

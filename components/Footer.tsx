'use client';

import { useSession } from "next-auth/react";
import Link from "next/link";
import { Signout } from "./AuthActions";

const YEAR = new Date().getFullYear();

export default function Footer() {
  const session = useSession();
  return (
    <footer className={"w-full h-fit py-8 text-center bg-black flex flex-col gap-4 items-center justify-center"}>
      <p className="text-sm text-gray-300 ">
        © {YEAR} Suncrest Fitness Center. All rights reserved.
      </p>

      {session.status === 'unauthenticated' && (<Link href="/api/auth/signin" className='text-sm text-gray-300'> Admin Login </Link>)}
      {session.status === 'authenticated' && (<Link href='/dashboard' className='text-sm text-gray-300'> Dashboard </Link>)}
      {session.status === 'authenticated' && (<Signout />)}
      <p className="text-sm text-gray-700">
        Created by <a href="https://www.tylerlundin.me" target="_blank" rel="noreferrer">Tyler Lundin</a>
      </p>
    </footer>
  )
}

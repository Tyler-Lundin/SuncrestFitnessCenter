"use client";

import Link from "next/link";
import { Signout } from "./AuthActions";

export default function FooterLinks({ user }: { user: any | null }) {
  return (
    <>
      {!user && (
        <Link href="/api/auth/signin" className="text-sm text-gray-300">
          {" "}
          Login{" "}
        </Link>
      )}
      {user && (
        <Link href="/dashboard" className="text-sm text-gray-300">
          {" "}
          Dashboard{" "}
        </Link>
      )}
      {user && <Signout />}
    </>
  );
}

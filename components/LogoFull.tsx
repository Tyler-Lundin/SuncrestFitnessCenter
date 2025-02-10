"use client";
import LogoSVG from "../public/Logo.svg";
import Link from "next/link";
import { Roboto_Serif } from "next/font/google";

const RS = Roboto_Serif({ subsets: ["latin"] });

export default function LogoFull() {
  return (
    <Link
      aria-label="Home Link as Logo for Desktop"
      href="/"
      className="flex gap-2 h-8"
    >
      <LogoSVG className={"h-8 justify-self-end self-center w-8"} />
      <h6 className={`self-center text-lg h-min ${RS.className}`}>
        Suncrest Fitness Center
      </h6>
    </Link>
  );
}

"use client";
import LogoSVG from "../public/Logo.svg";
import Link from "next/link";
import { Roboto_Serif, Bebas_Neue } from "next/font/google";

const RS_FONT = Roboto_Serif({ subsets: ["latin"] });
const BN_FONT = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default function Logo({
  asLink,
  text,
}: {
  asLink?: boolean;
  text?: string;
}) {
  if (asLink)
    return (
      <Link
        aria-label="Home Link as Logo for Desktop"
        href="/"
        className="flex gap-2 h-8"
      >
        <LogoSVG className={"h-8 justify-self-end self-center w-8"} />
      </Link>
    );

  return (
    <div>
      <LogoSVG className={"h-16 justify-self-end self-center w-16"} />
      {text && <h1>{text}</h1>}
    </div>
  );
}

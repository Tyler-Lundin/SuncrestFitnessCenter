"use client";
import LogoFull from "../LogoFull";
import LogoSmall from "../LogoSmall";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";

const Navbar = ({ toggleNav }: { toggleNav: () => void }) => {
  return (
    <div
      aria-label="Navigation Bar"
      className="flex overflow-hidden absolute top-0 left-0 z-50 items-center w-screen h-16 bg-neutral-200/90 backdrop-blur-md invert"
    >
      <div className="absolute left-6 top-1/2 -translate-y-1/2">
        <LogoFull />
      </div>
      <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:visible">
        <ul
          aria-label="Navigation Links Unordered List"
          className="flex gap-4 mr-4 menu menu-horizontal"
        >
          <NavLinks />
        </ul>
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 md:hidden">
        <OpenNavButton toggleNav={toggleNav} />
      </div>
      <div className="w-screen h-16 bg-gradient-to-t via-transparent to-transparent translate-y-1/4 from-black/30" />
    </div>
  );
};

export default Navbar;

function OpenNavButton({ toggleNav }: { toggleNav: () => void }) {
  return (
    <button
      aria-label="Navigation Toggle Button for Mobile"
      onClick={toggleNav}
      className="btn btn-square btn-ghost"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-6 h-6 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>
  );
}

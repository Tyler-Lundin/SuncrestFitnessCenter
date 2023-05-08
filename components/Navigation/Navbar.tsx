'use client';
import Link from "next/link";
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import LogoSmall from "../LogoSmall";
import NavLinks from "./NavLinks";



const Navbar = ({ toggleNav }: { toggleNav: () => void }) => {

  return (
    <div className="w-full navbar bg-base-100/70 backdrop-blur-md border-b border-black fixed z-50">
      <div className="flex-1 px-2 mx-auto ">
        <LogoSmall />
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal flex gap-4 mr-4">
          <NavLinks />
        </ul>
      </div>
      <div className="flex-none lg:hidden">
        <button onClick={toggleNav} className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </div>
  )
}

export default Navbar;

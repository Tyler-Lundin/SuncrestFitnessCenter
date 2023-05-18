'use client';
import LogoFull from "../LogoFull";
import LogoSmall from "../LogoSmall";
import NavLinks from "./NavLinks";



const Navbar = ({ toggleNav }: { toggleNav: () => void }) => {

  return (
    <div aria-label="Navigation Bar" className="w-screen h-16 flex items-center px-2 md:px-4 lg:px-6 bg-base-100/70 backdrop-blur-md border-b border-black fixed z-50">
      <div className="flex-1 px-2 mx-auto ">
        <span className="md:hidden">
          <LogoSmall />
        </span>
        <span className="hidden md:block">
          <LogoFull />
        </span>

      </div>
      <div className="flex-none hidden lg:block">
        <ul aria-label="Navigation Links Unordered List" className="menu menu-horizontal flex gap-4 mr-4">
          <NavLinks />
        </ul>
      </div>
      <div className="flex-none lg:hidden">
        <button aria-label="Navigation Toggle Button for Mobile" onClick={toggleNav} className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </div>
  )
}

export default Navbar;

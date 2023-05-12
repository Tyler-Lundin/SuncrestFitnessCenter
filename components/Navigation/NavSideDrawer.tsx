import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import NavLinks from "./NavLinks";
import LogoSmall from "../LogoSmall";

export default function NavSideDrawer({ isOpen, toggleNav }: { isOpen: boolean, toggleNav: () => void }) {

  return (
    <div className={`w-screen lg:hidden h-screen transition-all ease-in-out duration-300 fixed ${isOpen ? 'left-0' : '-left-80'} z-50`}>
      <ul className="menu p-8 w-80 h-full bg-base-100 text-4xl flex flex-col gap-6 relative">
        <AiOutlineClose className="absolute right-8 h-8 w-8 cursor-pointer z-50" onClick={toggleNav} />
        <button onClick={toggleNav} >
          <LogoSmall />
        </button>
        <NavLinks />
        <div className="flex flex-col items-center justify-center gap-4 w-80 bg-base-200 menu absolute left-0 p-8 bottom-0">
          <div className="flex gap-4">
            <a href="https://www.facebook.com/SuncresFitnessCenter" target="_blank" rel="noreferrer">
              <BsFacebook className="h-8 w-8" />
            </a>
            <a href="https://www.instagram.com/suncrestfitnesscenter/" target="_blank" rel="noreferrer">
              <BsInstagram className="h-8 w-8" />
            </a>
          </div>
          <a href="tel:1-905-426-7447" className="text-xl font-light">509-465-0131</a>
        </div>
      </ul>
    </div>
  )
}

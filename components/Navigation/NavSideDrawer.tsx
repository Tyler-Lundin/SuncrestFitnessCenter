import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import NavLinks from "./NavLinks";
import LogoSmall from "../LogoSmall";

export default function NavSideDrawer({
  isOpen,
  closeNav,
}: {
  isOpen: boolean;
  closeNav: () => void;
}) {
  return (
    <div
      aria-label="navigation drawer"
      className={`w-screen max-w-xs max-h-screen lg:hidden h-screen transition-all ease-in-out duration-300 fixed ${isOpen ? "left-0" : "-left-80"} z-50`}
    >
      <ul className="flex relative flex-col gap-6 p-8 w-full h-full text-4xl bg-red-500/75 backdrop-blur-md menu">
        <AiOutlineClose
          className="absolute right-8 z-50 w-8 h-8 cursor-pointer"
          onClick={closeNav}
        />
        <button disabled={!isOpen} onClick={closeNav}>
          <LogoSmall />
        </button>
        <NavLinks />
      </ul>
      <BottomSubmenu />
    </div>
  );
}

function BottomSubmenu() {
  return (
    <div className="flex absolute left-0 bottom-12 flex-col gap-4 justify-center items-center p-8 w-full">
      <div className="flex gap-4">
        <a
          href="https://www.facebook.com/SampleFitnessCenter"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook className="w-8 h-8" />
        </a>
        <a
          href="https://www.instagram.com/samplefitnesscenter/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram className="w-8 h-8" />
        </a>
      </div>
      <a href="tel:1-509-465-0131" className="text-xl font-light">
        509-465-0131
      </a>
    </div>
  );
}

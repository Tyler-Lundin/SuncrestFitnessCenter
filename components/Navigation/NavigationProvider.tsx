'use client';
import { atom, useAtom } from "jotai";
import Navbar from "./Navbar";
import NavSideDrawer from "./NavSideDrawer";

export const isNavOpenAtom = atom<boolean>(false);

export default function NavigationProvider() {
  const [isNavOpen, setIsNavOpen] = useAtom(isNavOpenAtom);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);
  return (
    <>
      <Navbar toggleNav={toggleNav} />
      <NavSideDrawer closeNav={closeNav} isOpen={isNavOpen} />
      <button onClick={toggleNav} className={`z-40 fixed lg:hidden ${isNavOpen ? 'block' : 'hidden'} top-0 left-0 w-screen h-screen bg-black/70`} />
    </>
  )
}

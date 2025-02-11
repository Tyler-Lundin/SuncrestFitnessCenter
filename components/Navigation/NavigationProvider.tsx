"use client";
import { atom, useAtom } from "jotai";
import Navbar from "./Navbar";
import NavSideDrawer from "./NavSideDrawer";
import { AnimatePresence, motion } from "framer-motion";

export const isNavOpenAtom = atom<boolean>(false);

export default function NavigationProvider() {
  const [isNavOpen, setIsNavOpen] = useAtom(isNavOpenAtom);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);
  return (
    <>
      <Navbar toggleNav={toggleNav} />
      <AnimatePresence>
        {isNavOpen && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            exit={{ opacity: 0 }}
            onClick={toggleNav}
            className={`z-50 fixed lg:hidden top-0 left-0 w-screen h-screen backdrop-blur-sm bg-black/80`}
          />
        )}
      </AnimatePresence>
      <NavSideDrawer closeNav={closeNav} isOpen={isNavOpen} />
    </>
  );
}

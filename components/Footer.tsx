import { getServerSession } from "next-auth";
import { authOptions } from "@/server/authOptions";
import FooterLinks from "./FooterLinks";
import Providers from "./Providers";


export default async function Footer() {
  const session = await getServerSession(authOptions);
  const YEAR = new Date().getFullYear();
  return (
    <Providers>
      <footer className={"w-full h-fit py-8 text-center bg-black flex flex-col gap-4 items-center justify-center"}>

        <FooterLinks user={session?.user} />
        <p className="text-xs text-gray-300 ">
          © {YEAR} Suncrest Fitness Center. <br /> All rights reserved.
        </p>
        <p className="text-xs text-gray-400">
          Created with ♡ by <a href="https://www.tylerlundin.me" target="_blank" rel="noreferrer" >Tyler Lundin</a>
        </p>
      </footer>
    </Providers>
  )
}

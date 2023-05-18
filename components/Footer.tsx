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
        <p className="text-sm text-gray-300 ">
          © {YEAR} Suncrest Fitness Center. All rights reserved.
        </p>

        <FooterLinks user={session?.user} />
        <p className="text-sm text-gray-300">
          Created by <a href="https://www.tylerlundin.me" target="_blank" rel="noreferrer">Tyler Lundin</a>
        </p>
      </footer>
    </Providers>
  )
}

import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Bebas_Neue, Shadows_Into_Light, Roboto } from "next/font/google";
import Logo from "./Logo";
import Particles from "./Particles";

const roboto = Roboto({
  weight: ["400", "900"],
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

const sil = Shadows_Into_Light({
  weight: ["400"],
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div className="grid relative grid-flow-row justify-start min-h-screen hide-scroll">
      <HeroOverlay />
      <Image
        aria-label="Hero Image of Deadlift Platform and Squat Rack"
        src="/images/gym/deadlift_platform.jpg"
        className="grayscale"
        fill
        priority
        loading="eager"
        alt="deadlift platform and squat rack"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Hero;

function HeroOverlay() {
  return (
    <div className="grid absolute top-0 right-0 bottom-0 left-0 z-40 place-content-center bg-gradient-to-tr from-black/95 via-black/75 to-red-400/75 backdrop-blur-sm">
      <Particles className="grid overflow-hidden relative justify-items-center place-content-center p-4 text-center rounded-lg border md:text-center bg-black/20 border-red-500/25">
        <span className="grid place-content-center invert">
          <Logo asLink={false} />
        </span>
        <h1
          style={roboto.style}
          className="text-5xl font-black text-white whitespace-nowrap md:text-8xl"
        >
          Suncrest <br /> Fitness Center
        </h1>
        <p style={bebasNeue.style} className="mb-3 text-white md:text-3xl">
          The Premiere fitness Club of Stevens County
        </p>
        <Link href="/about" className="mb-3 w-full">
          <button
            style={bebasNeue.style}
            className="flex z-50 gap-4 items-center p-3 w-full text-xl tracking-wide text-white whitespace-nowrap rounded-lg transition-all duration-500 md:text-4xl hover:bg-red-600 bg-red-600/80 group"
          >
            Come Look Inside!
            <span className="relative w-full h-full">
              <AiOutlineArrowRight className="absolute left-0 top-1/2 transition-all duration-500 -translate-y-1/2 group-hover:left-full group-hover:-translate-x-full" />
            </span>
          </button>
        </Link>
      </Particles>

      <Link
        href="/login"
        className="py-4 text-lg font-thin text-center text-white"
      >
        already a member? Login
      </Link>
    </div>
  );
}

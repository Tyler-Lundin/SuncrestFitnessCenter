import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Bebas_Neue, Shadows_Into_Light } from "next/font/google";

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
    <div className="grid absolute top-0 right-0 bottom-0 left-0 z-40 place-content-center bg-red-600/75 backdrop-blur-sm">
      <div className="grid justify-items-center place-content-center mb-16 max-w-md text-center md:text-left">
        <h1
          style={bebasNeue.style}
          className="text-5xl font-bold whitespace-nowrap md:text-8xl"
        >
          Suncrest <br /> Fitness Center
        </h1>
        <p style={sil.style} className="mb-5 md:text-2xl">
          The Premiere fitness Club of Stevens County
        </p>
        <Link href="/about" className="w-full">
          <button
            style={bebasNeue.style}
            className="flex z-50 gap-4 justify-between items-center py-2 px-8 w-full text-xl text-white rounded-lg md:text-4xl bg-black/75 group"
          >
            Learn More
            <AiOutlineArrowRight className="transition-all group-hover:translate-x-4" />
          </button>
        </Link>
      </div>
    </div>
  );
}

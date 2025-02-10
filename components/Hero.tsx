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
    <div className="relative justify-start min-h-screen hero">
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
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-black" />

      <div className="z-30 bg-opacity-70 hero-overlay" />
      <div className="grid left-0 z-30 items-center px-20 pb-20 h-full text-left border-r-2 bg-red-500/90 backdrop-blur-sm border-red-800/80 text-neutral-content">
        <div className="max-w-md">
          <h1
            style={bebasNeue.style}
            className="mb-5 text-5xl font-bold whitespace-nowrap md:text-8xl"
          >
            Suncrest <br /> Fitness Center
          </h1>
          <p style={sil.style} className="mb-5 text-2xl">
            The Premiere fitness Club of Stevens County
          </p>
          <Link href="/about">
            <button
              style={bebasNeue.style}
              className="flex z-50 gap-4 items-center py-2 px-8 text-4xl text-white bg-black rounded"
            >
              Learn More
              <AiOutlineArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

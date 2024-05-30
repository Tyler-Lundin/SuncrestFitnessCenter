import Image from "next/image";
import Link from "next/link";


const Hero = () => {


  return (
    <div className="hero relative min-h-screen">
      <Image
        aria-label="Hero Image of Deadlift Platform and Squat Rack"
        src="/images/gym/deadlift_platform.jpg"
        fill
        priority
        loading="eager"
        alt="deadlift platform and squat rack"
        style={{ objectFit: "cover" }}
      />

      <div className="hero-overlay bg-opacity-70 z-30" />
      <div className="hero-content text-center text-neutral-content z-30">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Sample Fitness Center</h1>
          <p className="mb-5">
            The Premiere fitness Club of Sample County
          </p>
          <Link href='/about' ><button className="btn z-50 btn-primary">Learn More</button> </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero;

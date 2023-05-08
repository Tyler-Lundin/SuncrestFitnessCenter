import Link from "next/link";


const Hero = () => {


  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/gym/deadlift_platform.jpg")` }}>
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Suncrest Fitness Center</h1>
          <p className="mb-5">
            The Premiere fitness Club of South Stevens County
          </p>
          <Link href='/about' ><button className="btn z-50 btn-primary">Learn More</button> </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero;

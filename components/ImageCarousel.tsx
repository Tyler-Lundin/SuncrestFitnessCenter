"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

const PATH = "/images/gym/";
const images = [
  {
    src: "bench_press_2.jpg",
    title: "Free Weights",
    desc: "Crush those gains!",
  },
  { src: "cardio.jpg", title: "Cardio", desc: "Get your heart racing!" },
  { src: "dumbbell_rack.jpg", title: "Dumbbells", desc: "Lift to tone!" },
  { src: "machines.jpg", title: "Cables", desc: "Feel the burn!" },
  { src: "yoga_room.jpg", title: "Yoga", desc: "Find your zen!" },
  { src: "equipment.jpg", title: "Machines", desc: "Power up!" },
  { src: "squat_rack.jpg", title: "Squat Rack", desc: "Leg day glory!" },
  {
    src: "smith_machine_2.jpg",
    title: "Smith Machine",
    desc: "Strength and stability!",
  },
  { src: "yoga_room_2.jpg", title: "Boxing", desc: "Punch it out!" },
  { src: "equipment_2.jpg", title: "Weights", desc: "Lift heavy, get strong!" },
  { src: "yoga_room_4.jpg", title: "Classes", desc: "Join the squad!" },
  { src: "racquetball_2.jpg", title: "Racquetball", desc: "Game on!" },
];

const ImageCarousel = () => {
  return (
    <Carousel
      className="py-0 px-8 w-full bg-black pointer-events-none lg:px-16"
      infiniteLoop
      autoPlay
      renderArrowNext={() => <></>}
      renderArrowPrev={() => <></>}
      showIndicators={false}
      showStatus={false}
    >
      {images.map(({ src, title, desc }, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row gap-3 justify-center items-center py-3 h-[75vh] ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
        >
          <div className="overflow-hidden relative w-full rounded-lg h-[75vh]">
            <Image
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              fill
              style={{ objectFit: "cover" }}
              alt={title}
              src={PATH + src}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="grid p-4 text-center md:p-16 md:text-left">
            <h1
              style={bebasNeue.style}
              className="text-3xl font-bold text-white lg:text-7xl"
            >
              {title}
            </h1>
            <p className="text-xl font-thin text-white lg:text-6xl">{desc}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;

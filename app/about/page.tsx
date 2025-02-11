import TitledContainer from "@/components/TitledContainer";
import Page from "@/components/page/Page";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
const ImageCarousel = dynamic(() => import("@/components/ImageCarousel"));

import { Bebas_Neue } from "next/font/google";
import LogoSmall from "@/components/LogoSmall";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SFC | About Us",
  description:
    "Suncrest Fitness Center and Phase 1 Physical Therapy are working together to help the community of Lake Spokane and Suncrest live life to the fullest.",
};

const paragraphs = [
  "Suncrest Fitness Center and Phase 1 Physical Therapy are working together to help the community of Lake Spokane and Suncrest live life to the fullest.",
  "With over 9780 sq. ft. of rehabilitation and exercise space and state-of-the-art cardio respiratory and strength training equipment, we have the capacity to help you achieve all of your health and fitness goals.",
  "Our team of physical therapists, personal trainers and assistants are committed to help our patients and club members achieve their desired goals and return to living stronger, healthier lives.",
  "We are a family owned and operated business and we are proud to be a part of the Suncrest community. We are committed to providing the highest quality of care and service to our patients and club members.",
];

const PATH = "/images/old/";
const oldPhotos = [
  { src: "outside.jpeg", title: "Outdoor Activities" },
  { src: "yoga.jpeg", title: "Yoga Class" },
  { src: "group.jpeg", title: "Group Photo" },
];

export default function AboutPage() {
  // const [openImage,setOpenImage] = useState<number | null>(null)
  // function toggleImage(index:number){
  //
  // }
  return (
    <Page>
      <div className="overflow-x-hidden w-screen bg-black hide-scroll">
        <TitledContainer title="About Us" />
        <WhoAreWe />
        <ImageCarousel />
        <hr className="w-full border-b-white/25 border-[1px]" />

        <div className="flex flex-wrap gap-8 place-content-center p-8 w-screen bg-black">
          {oldPhotos.map((image, index) => (
            <Image
              key={image.title}
              className="rounded-md"
              priority={index === 0}
              quality={100}
              width={150}
              height={150}
              style={{ objectFit: "cover" }}
              alt={image.title}
              src={PATH + image.src}
            />
          ))}
        </div>

        <hr className="w-full border-b-white/25 border-[1px]" />
      </div>
    </Page>
  );
}

function WhoAreWe() {
  return (
    <div className="grid gap-2 p-8 w-screen bg-white">
      <LogoSmall />
      <h1 style={bebasNeue.style} className="text-3xl font-bold">
        Who Are We?
      </h1>
      <hr className="w-full bg-black h-[2px]" />
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={"text-black font-light text-md sm:text-xl  "}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

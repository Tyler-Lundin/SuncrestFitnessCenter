import TitledContainer from "@/components/TitledContainer";
import Page from "@/components/page/Page";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
const ImageCarousel = dynamic(() => import("@/components/ImageCarousel"));

import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SFC | About Us",
  description:
    "Suncrest Fitness Center and Phase 1 Physical Therapy are working together to help the community of Lake Spokane and Sample live life to the fullest.",
};

const paragraphs = [
  "Suncrest Fitness Center and Phase 1 Physical Therapy are working together to help the community of Lake Spokane and Sample live life to the fullest.",
  "With over 9780 sq. ft. of rehabilitation and exercise space and state-of-the-art cardio respiratory and strength training equipment, we have the capacity to help you achieve all of your health and fitness goals.",
  "Our team of physical therapists, personal trainers and assistants are committed to help our patients and club members achieve their desired goals and return to living stronger, healthier lives.",
  "We are a family owned and operated business and we are proud to be a part of the Sample community. We are committed to providing the highest quality of care and service to our patients and club members.",
];

const PATH = "/images/old/";
const oldPhotos = [
  { src: "outside.jpeg", title: "Outdoor Activities" },
  { src: "yoga.jpeg", title: "Yoga Class" },
  { src: "group.jpeg", title: "Group Photo" },
];

export default function AboutPage() {
  return (
    <Page>
      <div className="bg-black">
        <TitledContainer title="About Us" />
        <ImageCarousel />

        <div className="flex flex-wrap gap-8 place-content-center p-8 w-screen bg-black">
          {oldPhotos.map((image, index) => (
            <Image
              key={image.title}
              className="rounded-md"
              priority={index === 0}
              quality={100}
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
              alt={image.title}
              src={PATH + image.src}
            />
          ))}
        </div>
        <div className="grid gap-4 p-12 mt-5 bg-red-500 lg:px-16 w-fit">
          <div className="grid relative gap-4 py-4 px-4 bg-white rounded-lg w-fit">
            <div className="relative py-1 px-1 bg-black rounded-lg border border-black w-fit">
              <div className="grid gap-2 p-4 bg-white rounded-lg">
                <h1 style={bebasNeue.style} className="text-5xl font-bold">
                  {" "}
                  Who Are We?{" "}
                </h1>
                <hr className="w-full bg-black h-[2px]" />
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={"text-black font-light text-md sm:text-xl  "}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

import TitledContainer from "@/components/TitledContainer"
import Page from "@/components/page/Page"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
const ImageCarousel = dynamic(() => import("@/components/ImageCarousel"))


export const metadata: Metadata = {
  title: "SFC | About Us",
  description: "Sample Fitness Center and Phase 1 Physical Therapy are working together to help the community of Lake Spokane and Sample live life to the fullest.",
}


const paragraphs = [
  "Sample Fitness Center and Phase 1 Physical Therapy are working together to help the community of Lake Spokane and Sample live life to the fullest.",
  "With over 9780 sq. ft. of rehabilitation and exercise space and state-of-the-art cardio respiratory and strength training equipment, we have the capacity to help you achieve all of your health and fitness goals.",
  "Our team of physical therapists, personal trainers and assistants are committed to help our patients and club members achieve their desired goals and return to living stronger, healthier lives.",
  "We are a family owned and operated business and we are proud to be a part of the Sample community. We are committed to providing the highest quality of care and service to our patients and club members.",
]

const PATH = "/images/old/"
const oldPhotos = [
  { src: "outside.jpeg", title: "Outdoor Activities" },
  { src: "yoga.jpeg", title: "Yoga Class" },
  { src: "group.jpeg", title: "Group Photo" },
]


export default function AboutPage() {


  return (
    <Page>
      <div className="bg-black text-white ">
        <TitledContainer title="About Us" />
      </div>
      <ImageCarousel />
      <div className="grid gap-4 w-fit px-8 lg:px-16 pb-8 pt-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className={"text-black font-light text-md sm:text-xl  "}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className="w-screen flex p-8 flex-wrap place-content-center gap-8 bg-black">
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
    </Page>
  )
}

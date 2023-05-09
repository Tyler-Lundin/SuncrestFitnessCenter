import ImageCarousel from "@/components/ImageCarousel"
import TitledContainer from "@/components/TitledContainer"
import Page from "@/components/page/Page"




const paragraphs = [
  'Suncrest Fitness Center and Phase 1 Physical Therapy are working together to help the community of Lake Spokane and Suncrest live life to the fullest.',
  'With over 9780 sq. ft. of rehabilitation and exercise space and state-of-the-art cardio respiratory and strength training equipment, we have the capacity to help you achieve all of your health and fitness goals.',
  'Our team of physical therapists, personal trainers and assistants are committed to help our patients and club members achieve their desired goals and return to living stronger, healthier lives.',
  'We are a family owned and operated business and we are proud to be a part of the Suncrest community. We are committed to providing the highest quality of care and service to our patients and club members.',
]

export default function AboutPage() {


  return (
    <Page>
      <ImageCarousel />
      <TitledContainer title='About Us' />
      <div className='grid gap-4 w-fit px-8 lg:px-16 pb-16 max-w-2xl'>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className={'text-black font-light text-md sm:text-xl  '}>
            {paragraph}
          </p>
        ))}
      </div>
    </Page>
  )
}

'use client'
import Image from "next/image"
import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PATH = '/images/gym/'
const images = [
  { src: 'bench_press_2.jpg', title: 'Free Weights' },
  { src: 'cardio.jpg', title: 'Cardio Machines' },
  { src: 'dumbbell_rack.jpg', title: 'Dumbbells' },
  { src: 'machines.jpg', title: 'Cable Machines' },
  { src: 'yoga_room.jpg', title: 'Yoga' },
  { src: 'equipment.jpg', title: 'More Machines' },
  { src: 'squat_rack.jpg', title: 'Squat Rack' },
  { src: 'smith_machine_2.jpg', title: 'Smith Machine' },
  { src: 'yoga_room_2.jpg', title: 'Boxing' },
  { src: 'equipment_2.jpg', title: 'More Dumbbells' },
  { src: 'yoga_room_4.jpg', title: 'Classes' },
  { src: 'whiteboards.jpg', title: 'Refreshments' },
  { src: 'racquetball_2.jpg', title: 'Racquetball' },
]

const ImageCarousel = () => {

  return (
    <Carousel
      className='w-full bg-black px-4 pt-4'
      axis='horizontal'
      infiniteLoop
      autoPlay
      swipeable
      renderThumbs={() => (
        images.map((image, index) => (
          <div key={`${image.title} ${index} thumb`} className="w-full h-20 relative">
            <Image
              priority={index === 0}
              fill
              quality={1}
              style={{ objectFit: 'cover' }}
              alt={image.title}
              src={PATH + image.src}
            />
          </div>
        ))
      )}
    >
      {images.map((image, index) => {
        return (
          <div key={`${image.title} ${index} slide`} className='overflow-hidden w-full h-[80vh] relative flex flex-col md:flex-row justify-center items-center py-3'>
            <Image
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              fill
              quality={5}
              style={{ objectFit: 'cover' }}
              alt={image.title}
              src={PATH + image.src}
              className='absolute opacity-20 scale-150 -z-10 blur-sm'
              sizes="(max-width: 768px) 100vw"
            />
            <div className="w-full max-w-lg h-[80vh] relative flex">
              <Image
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
                fill
                style={{ objectFit: 'cover' }}
                alt={image.title}
                src={PATH + image.src}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h1 className='text-white text-3xl lg:text-7xl lg:whitespace-normal mx-auto h-min w-min whitespace-nowrap font-bold p-4'>{image.title}</h1>
          </div>
        )
      })}
    </Carousel>
  )
}

export default ImageCarousel;

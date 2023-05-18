import DayCard from "@/components/DayCard";
import TitledContainer from "@/components/TitledContainer";
import Page from "@/components/page/Page";
import { ForeverFit, Karate, FullBodyFitness_A, FullBodyFitness_B, ButtsAndGuts, Barre, Yoga } from "@/configs/classes"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SFC | Schedule',
  description: 'View our schedule and find the best fit for you.',
}

const DAYS = [
  { day: 'Sunday', hours: '09:00 AM - 05:00 PM', classes: [Yoga] },
  { day: 'Monday', hours: '05:00 AM - 09:00 PM', classes: [ForeverFit, FullBodyFitness_A] },
  { day: 'Tuesday', hours: '05:00 AM - 09:00 PM', classes: [ForeverFit, FullBodyFitness_A] },
  { day: 'Wednesday', hours: '05:00 AM - 09:00 PM', classes: [FullBodyFitness_B] },
  { day: 'Thursday', hours: '05:00 AM - 09:00 PM', classes: [ForeverFit, Barre] },
  { day: 'Friday', hours: '05:00 AM - 09:00 PM', classes: [ForeverFit] },
  { day: 'Saturday', hours: '07:00 AM - 08:00 PM', classes: [Karate, ButtsAndGuts] },
]




export default function SchedulePage() {
  return (
    <Page>
      <div className='bg-black text-white'>
        <TitledContainer title='Schedule' subtitle='View our schedule and find the best fit for you.' />
      </div>
      <div className='w-fit flex flex-wrap gap-4 content-around py-8 px-2 md:px-8 lg:px-16'>
        {DAYS.map((day, index) => (
          <DayCard key={String(day.day + index)} day={day} />
        ))}
      </div>
    </Page >
  )
}


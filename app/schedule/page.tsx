import DayCard from "@/components/DayCard";
import Particles from "@/components/Particles";
import TitledContainer from "@/components/TitledContainer";
import Page from "@/components/page/Page";
import {
  ForeverFit,
  Karate,
  FullBodyFitness_A,
  FullBodyFitness_B,
  ButtsAndGuts,
  Barre,
  Yoga,
  InstructorColors,
} from "@/configs/classes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SFC | Schedule",
  description: "View our schedule and find the best fit for you.",
};

const DAYS = [
  { day: "Sunday", hours: "09:00 AM - 05:00 PM", classes: [Yoga] },
  {
    day: "Monday",
    hours: "05:00 AM - 09:00 PM",
    classes: [ForeverFit, FullBodyFitness_A],
  },
  {
    day: "Tuesday",
    hours: "05:00 AM - 09:00 PM",
    classes: [ForeverFit, FullBodyFitness_A],
  },
  {
    day: "Wednesday",
    hours: "05:00 AM - 09:00 PM",
    classes: [FullBodyFitness_B],
  },
  {
    day: "Thursday",
    hours: "05:00 AM - 09:00 PM",
    classes: [ForeverFit, Barre],
  },
  { day: "Friday", hours: "05:00 AM - 09:00 PM", classes: [ForeverFit] },
  {
    day: "Saturday",
    hours: "07:00 AM - 08:00 PM",
    classes: [Karate, ButtsAndGuts],
  },
];

export default function SchedulePage() {
  return (
    <Page>
      <div className="text-white bg-black">
        <TitledContainer
          title="Schedule"
          subtitle="View our schedule and find the best fit for you."
        />
      </div>
      <Particles className="bg-black">
        <div className="flex flex-wrap gap-4 justify-center py-4 px-8 lg:px-16 bg-white/75">
          {Object.keys(InstructorColors).map((instructor, index) => (
            <div
              key={String(instructor + index)}
              className="flex flex-col justify-center items-center"
            >
              <div
                className="w-8 h-8 rounded-full border border-black md:w-16 md:h-16"
                style={{ background: InstructorColors[instructor] }}
              />
              <h2 className="text-xs text-center md:text-lg">{instructor}</h2>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 content-around py-8 px-2 md:px-8 lg:px-16 w-fit">
          {DAYS.map((day, index) => (
            <DayCard key={String(day.day + index)} day={day} />
          ))}
        </div>
      </Particles>
    </Page>
  );
}

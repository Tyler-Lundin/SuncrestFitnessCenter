import TitledContainer from "@/components/TitledContainer";
import Page from "@/components/page/Page";
import { ForeverFit, Karate, FullBodyFitness_A, FullBodyFitness_B, ButtsAndGuts, Barre, Yoga } from "@/configs/classes"


interface IClass {
  name: string,
  time: string,
  instructors: string,
}

const DAYS = [
  { day: 'Sunday', classes: [Yoga] },
  { day: 'Monday', classes: [ForeverFit, FullBodyFitness_A] },
  { day: 'Tuesday', classes: [ForeverFit, FullBodyFitness_A] },
  { day: 'Wednesday', classes: [FullBodyFitness_B] },
  { day: 'Thursday', classes: [ForeverFit, Barre] },
  { day: 'Friday', classes: [ForeverFit] },
  { day: 'Saturday', classes: [Karate, ButtsAndGuts] },
]


const Classes = ({ classes }: { classes: IClass[] }) => {
  if (classes.length === 0) {
    return (
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>No Classes</h1>
      </div>
    )
  }
  return classes.map(({ name, time, instructors }) => (
    <div key={name} className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold'>{name}</h1>
      <h2 className='text-xl'>{time}</h2>
      <h2 className='text-xl'>instructors</h2>
    </div>
  ))
}


export default function SchedulePage() {
  return (
    <Page>
      <TitledContainer title='Schedule' subtitle='View our schedule and find the best fit for you.' />
      <div className='overflow-x-auto px-4'>
        <div id='week-container' className='grid grid-cols-7 min-w-max h-full gap-4'>
          {DAYS.map(({ day, classes }, index) => (
            <div key={String(day + index)} className='w-72 h-fit p-4 rounded border-b border-gray-300 flex flex-col'>
              <h1 className='text-2xl font-bold self-center'>{day}</h1>
              <hr className='my-2' />
              <div className='flex flex-col justify-center items-center'>
                <Classes classes={classes} />
              </div>
            </div>
          ))}

        </div>
      </div>
    </Page >
  )
}

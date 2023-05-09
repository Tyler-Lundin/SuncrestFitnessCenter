interface IClass {
  name: string,
  time: string,
  instructors: string[],
}

interface IDay {
  day: string,
  hours: string,
  classes: IClass[],
}

export default function DayCard({ day }: { day: IDay }) {
  const { hours, classes, day: day_label } = day
  return (
    <div className='w-96 bg-base-100 p-4 border-black border-8 text-black rounded-2xl mx-auto shadow-lg dark:shadow-none'>
      <div className='grid justify-items-center relative  p-2'>
        <h1 className='text-3xl font-bold '>{day_label}</h1>
        <h4 className='text-md font-bold'> {hours}</h4>
      </div>
      <hr className='my-4' />
      <Classes classes={classes} />
    </div>
  )
}



const Classes = ({ classes }: { classes: IClass[] | [] }) => {
  if (classes.length === 0) {
    return (
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>No Classes</h1>
      </div>
    )
  }
  return (
    <div className='grid gap-4 px-8'>
      {classes.map(({ name, time, instructors }, index) => (
        <div key={String(name + index)} className='flex flex-col justify-center '>
          <h1 className=' font-bold'>{name} w/ {instructors.join(' & ')}</h1>
          <h2 className=' '>{time}</h2>
        </div>
      ))}
    </div>
  )
}

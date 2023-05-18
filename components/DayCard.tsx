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
    <div className='w-full max-w-sm bg-base-100 p-4 border-black border-2 text-black rounded-2xl mx-auto shadow-lg dark:shadow-none'>
      <div className='grid relative border-b border-black'>
        <h1 className='text-2xl font-bold '>{day_label}</h1>
        <h4 className='text-md font-bold'> {hours}</h4>
      </div>
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
    <div className='grid gap-4 py-4'>
      {classes.map(({ name, time, instructors }, index) => (
        <div key={String(name + index)} className='flex flex-col justify-center '>
          <h1 className=' font-bold'>{name} w/ {instructors.join(' & ')}</h1>
          <h2 className=' '>{time}</h2>
        </div>
      ))}
    </div>
  )
}



export default function TitledContainer({ title, subtitle, children }: { title?: string, subtitle?: string, children?: React.ReactNode }) {
  return (
    <div className=' px-8 lg:px-16 py-8'>
      <span className='lg:flex grid justify-center sm:justify-start gap-8'>
        {title && <h1 className='text-4xl sm:text-5xl  text-center sm:text-left font-bold '>{title}</h1>}
        {subtitle && <h2 className='self-center text-center sm:text-left max-w-md '>{subtitle}</h2>}
      </span>
      {children}
    </div>
  )
}

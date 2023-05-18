const Page = ({ children }: { children: React.ReactNode }) => (
  <main
    style={{
      backgroundImage: 'radial-gradient(#000000 0.7px, transparent 0.7px), radial-gradient(#000000 0.7px, #CFCFCF 0.7px)',
      backgroundSize: '28px 28px',
      backgroundPosition: '0 0, 14px 14px',
    }}
    className='w-screen overflow-x-hidden min-h-screen pt-16 bg-base-300'>
    {children}
  </main>
)


export default Page;

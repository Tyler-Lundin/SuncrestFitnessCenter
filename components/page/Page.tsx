const Page = ({ children }: { children: React.ReactNode }) => (
  <main
    style={{
      backgroundImage: 'radial-gradient(#000000 0.7000000000000001px, transparent 0.7000000000000001px), radial-gradient(#000000 0.7000000000000001px, #CFCFCF 0.7000000000000001px);',
      backgroundSize: '28px 28px',
      backgroundPosition: '0 0, 14px 14px',
    }}
    className='w-screen min-h-screen pt-20 bg-base-300'>
    {children}
  </main>
)


export default Page;

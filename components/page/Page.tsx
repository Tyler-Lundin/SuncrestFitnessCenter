const Page = ({ children }: { children: React.ReactNode }) => (
  <main
    style={{
      backgroundImage:
        "radial-gradient(#3b3b3b 0.7px, transparent 0.7px), radial-gradient(#3b3b3b 0.7px, #CFCFCF 0.7px)",
      backgroundSize: "28px 28px",
      backgroundPosition: "0 0, 14px 14px",
    }}
    className="overflow-x-hidden pt-16 w-screen min-h-screen bg-base-300 hide-scroll"
  >
    {children}
  </main>
);

export default Page;

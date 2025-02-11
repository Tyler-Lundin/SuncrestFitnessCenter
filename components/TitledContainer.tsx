import { Bebas_Neue, Shadows_Into_Light } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

const sil = Shadows_Into_Light({
  weight: ["400"],
  subsets: ["latin"],
});

export default function TitledContainer({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="py-2 px-8 lg:px-16">
      <span className="grid gap-1 justify-center items-center text-white sm:justify-start md:gap-8 lg:flex">
        {title && (
          <h1
            style={bebasNeue.style}
            className="text-xl font-bold sm:text-2xl sm:text-left"
          >
            {title}
          </h1>
        )}
        {subtitle && (
          <h2
            style={sil.style}
            className="self-center max-w-md sm:text-left md:whitespace-nowrap"
          >
            {subtitle}
          </h2>
        )}
      </span>
      {children}
    </div>
  );
}

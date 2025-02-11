import { Bebas_Neue, Zen_Antique } from "next/font/google";

const firstFont = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

const secondFont = Zen_Antique({
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
            style={firstFont.style}
            className="text-xl font-bold sm:text-2xl sm:text-left"
          >
            {title}
          </h1>
        )}
        {subtitle && (
          <h2
            style={secondFont.style}
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

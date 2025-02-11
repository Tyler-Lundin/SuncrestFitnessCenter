import Page from "@/components/page/Page";
import Hero from "@/components/Hero";

export const metadata = {
  title: "SFC | Home",
  description:
    "Suncrest Fitness Center is the premiere choice for fitness in South Stevens County",
};

export default function HomePage() {
  return (
    <Page>
      <Hero />
    </Page>
  );
}

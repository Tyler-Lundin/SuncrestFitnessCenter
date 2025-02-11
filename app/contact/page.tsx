import AdditionalContactInfo from "@/components/AdditionalContactInfo";
import ContactForm from "@/components/ContactForm";
import TitledContainer from "@/components/TitledContainer";
import Page from "@/components/page/Page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SFC | Contact Us",
  description:
    "Whether You're a Fitness Pro or a Beginner, We're Here to Help You Succeed",
};

const SUBTITLE =
  "Whether You\'re a Fitness Pro or a Beginner, We\'re Here to Help You Succeed";

export default function ContactPage() {
  return (
    <Page>
      <div className="bg-black">
        <TitledContainer title="Contact Us" subtitle={SUBTITLE} />
        <div className="grid gap-8 p-8 mx-auto max-w-4xl bg-black transition-all md:rounded-lg md:border md:border-black">
          <AdditionalContactInfo />
          <ContactForm />
        </div>
      </div>
    </Page>
  );
}

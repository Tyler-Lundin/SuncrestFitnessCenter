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
      <div className="pb-10">
        <div className="mb-8 text-white bg-black">
          <TitledContainer title="Contact Us" subtitle={SUBTITLE} />
        </div>
        <div className="h-2" /> {/* Spacer */}
        <AdditionalContactInfo />
        <div className="h-8" /> {/* Spacer */}
        <div className="p-8 mx-auto max-w-4xl rounded-lg transition-all md:border md:border-black bg-base-100">
          <ContactForm />
        </div>
      </div>
    </Page>
  );
}

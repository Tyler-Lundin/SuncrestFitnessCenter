import AdditionalContactInfo from "@/components/AdditionalContactInfo";
import ContactForm from "@/components/ContactForm";
import TitledContainer from "@/components/TitledContainer";
import Page from "@/components/page/Page";


const SUBTITLE = "Whether You're a Fitness Pro or a Beginner, We're Here to Help You Succeed"

export default function ContactPage() {

  return (
    <Page>
      <div className='bg-black text-white mb-8'>
        <TitledContainer title='Contact Us' subtitle={SUBTITLE} />
      </div>
      <div className='mx-auto max-w-4xl p-8 bg-base-100 rounded-lg md:border-8 md:border-black'>
        <ContactForm />
      </div>
      <div className='h-2' /> {/* Spacer */}
      <AdditionalContactInfo />
      <div className='h-8' /> {/* Spacer */}
    </Page>
  )
}

import { SignInWithEmail } from "@/components/AuthActions";
import TitledContainer from "@/components/TitledContainer";
import Page from "@/components/page/Page";

export default function SignInPage() {

  return (
    <Page>
      <TitledContainer title="Admin Sign In" subtitle='Login to gain access to the admin dashboard' />
      <div className='w-full h-full flex justify-center items-center'>
        <SignInWithEmail />
      </div>
    </Page>
  )
}

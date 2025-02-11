import { SignInWithEmail } from "@/components/AuthActions";
import Particles from "@/components/Particles";
import TitledContainer from "@/components/TitledContainer";
import Page from "@/components/page/Page";

export default function SignInPage() {
  return (
    <Page>
      <div className="text-white bg-black">
        <TitledContainer title="Admin Sign In" />
      </div>

      <div className="overflow-hidden relative w-screen h-screen bg-black">
        <Particles className="grid place-content-center w-screen h-full">
          <SignInWithEmail />
        </Particles>
      </div>
    </Page>
  );
}

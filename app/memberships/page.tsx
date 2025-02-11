import TitledContainer from "@/components/TitledContainer";
import Page from "@/components/page/Page";
import MEMBERSHIPS from "../../configs/memberships.config";
import MembershipCard from "@/components/MembershipCard";
import { Metadata } from "next";
import Particles from "@/components/Particles";

export const metadata: Metadata = {
  title: "SFC | Memberships",
  description:
    "Whether You're a Fitness Pro or a Beginner, We're Here to Help You Succeed",
};

export default function MembershipsPage() {
  return (
    <Page>
      <div className="text-white bg-black">
        <TitledContainer title="Memberships" />
      </div>

      <Particles className="w-full bg-black lg:px-16">
        <ul className="flex flex-wrap">
          {MEMBERSHIPS.map((membership, index) => (
            <MembershipCard key={index} membership={membership} />
          ))}
        </ul>
      </Particles>
    </Page>
  );
}

import TitledContainer from "@/components/TitledContainer";
import Page from "@/components/page/Page";
import MEMBERSHIPS from '../../configs/memberships.config';
import MembershipCard from "@/components/MembershipCard";

const SUBTITLE = 'View our membership options and find the best fit for you.';

export default function MembershipsPage() {

  return (
    <Page>
      <div className='bg-black text-white'>
        <TitledContainer title='Memberships' subtitle={SUBTITLE} />
      </div>
      <div className='w-fit flex flex-wrap gap-4 content-around py-8 px-8 lg:px-16'>
        {MEMBERSHIPS.map((membership, index) => (
          <MembershipCard key={index} membership={membership} />
        ))}
      </div>
    </Page>
  )
}

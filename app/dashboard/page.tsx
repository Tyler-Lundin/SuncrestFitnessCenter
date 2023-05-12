'use client';
import TitledContainer from "@/components/TitledContainer";
import Page from "@/components/page/Page";
import { useSession } from 'next-auth/react';
import { redirect } from "next/navigation";


export default function DashboardPage() {
  const { data: session, status } = useSession()

  if (status === 'loading') return (
    <Page>
      <h1> Loading... </h1>
    </Page>
  )
  if (status === 'unauthenticated') return redirect('/auth/signin')


  return (
    <Page>
      <TitledContainer title="Dashboard" subtitle={session?.user?.email || ''} />
      <div className='w-full h-20 bg-base-200 p-4'>
        <h3 className='text-center text-3xl font-light'> Messages </h3>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <p className='text-center text-xl font-light'> You have no messages </p>
        </div>
      </div>

    </Page>
  )
}

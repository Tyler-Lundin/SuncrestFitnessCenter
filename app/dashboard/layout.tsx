import DashboardNavigation from "@/components/DashboardNavigation";
import TitledContainer from "@/components/TitledContainer";
import Page from "@/components/page/Page";
import { authOptions } from "@/server/authOptions";
import { getServerSession } from "next-auth";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  return (
    <main>
      <Page>
        <TitledContainer title="Dashboard" subtitle={session?.user?.email || ''} />
        <DashboardNavigation />
        {children}
      </Page>
    </main>
  )
}

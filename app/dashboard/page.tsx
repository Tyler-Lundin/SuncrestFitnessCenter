import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function DashboardPage() {
  const session = await getServerSession()
  if (!session?.user) return redirect('/auth/signin')
  return redirect('/dashboard/messages')
}

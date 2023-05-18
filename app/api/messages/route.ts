
import { NextResponse } from "next/server"
import { prisma } from "@/server/db"
import { getServerSession } from "next-auth"
import { authOptions } from "@/server/authOptions"

export async function GET() {
  const session = await getServerSession(authOptions)
  const user = session?.user
  console.log('GET MESSAGES RUNNING')

  if (!user) {
    console.log('NO USER')
    return NextResponse.redirect("/auth/signin")
  }

  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
    where: { archived: false },
  })
  console.log('MESSAGES', messages)

  return NextResponse.json(messages)


}

export async function POST(req: Request) {
  console.log('DELETE MESSAGES RUNNING')
  try {
    const { ids, action }: { ids: string[] | []; action: 'archive' | 'delete' } = await req.json();
    if (action === 'delete') {
      console.log('DELETING', ids)
      await prisma.message.deleteMany({
        where: { id: { in: ids } },
      })
      return NextResponse.json({ success: true })
    }

    if (action === 'archive') {
      console.log('ARCHIVING', ids)
      await prisma.message.updateMany({
        where: { id: { in: ids } },
        data: { archived: true },
      })
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Invalid action' })
  }
  catch (error: any) {
    console.log('ERROR', error)
    return NextResponse.json({ error: error.message })
  }
}


import { DataTable } from "./data-table"
import type { Message } from "@prisma/client"
import { columns } from "./columns"
import { prisma } from "@/server/db"
import TitledContainer from "@/components/TitledContainer"

async function getData(): Promise<Message[] | []> {
  try {
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        archived: false,
      }
    })
    console.log(messages)
    return messages
  } catch (e) {
    console.error(e)
  }
  return []
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <TitledContainer>
      <DataTable columns={columns} data={data} />
    </TitledContainer>
  )
}

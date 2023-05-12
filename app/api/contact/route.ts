import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/server/db"
import { Prisma } from "@prisma/client"

export async function POST(request: Request) {

  const req = await request.json()
  if (!req.name) return NextResponse.json({ error: "Name is required" })
  if (!req.email) return NextResponse.json({ error: "Email is required" })
  if (!req.phone) return NextResponse.json({ error: "Phone is required" })

  const data: Prisma.MessageCreateInput = {
    name: req.name,
    email: req.email,
    phone: req.phone,
    body: req.message,
  }

  const message = await prisma.message.create({ data })

  console.log(message)
  return NextResponse.json(message)

}


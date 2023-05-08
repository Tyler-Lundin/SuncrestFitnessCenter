import { NextRequest, NextResponse } from "next/server"

export async function POST(req: Request) {

  const res = await req.json()
  console.log({ res })
  return NextResponse.json({ body: res, message: "Contact form submitted" })

}


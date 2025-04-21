import { NextResponse } from "next/server"
import type { Bill } from "@/types/dashboard"

export async function GET() {
  // Here you would fetch data from your database
  // Example:
  // const bills = await db.bills.findMany()

  // For now, we'll return an empty array
  const bills: Bill[] = []

  return NextResponse.json({ bills })
}

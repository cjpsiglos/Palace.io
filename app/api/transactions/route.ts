import { NextResponse } from "next/server"
import type { Transaction } from "@/types/dashboard"

export async function GET() {
  // Here you would fetch data from your database
  // Example:
  // const transactions = await db.transactions.findMany()

  // For now, we'll return an empty array
  const transactions: Transaction[] = []

  return NextResponse.json({ transactions })
}

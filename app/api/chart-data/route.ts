import { NextResponse } from "next/server"
import type { ChartDataPoint } from "@/types/dashboard"

export async function GET() {
  // Here you would fetch data from your database
  // Example:
  // const chartData = await db.getIncomeVsExpenses()

  // For now, we'll return an empty array
  const data: ChartDataPoint[] = []

  return NextResponse.json({ data })
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Skeleton } from "@/components/ui/skeleton"
import type { ChartDataPoint } from "@/types/dashboard"

interface ExpenseChartProps {
  data: ChartDataPoint[]
  isLoading: boolean
}

export function ExpenseChart({ data, isLoading }: ExpenseChartProps) {
  return (
    <Card className="col-span-full md:col-span-1">
      <CardHeader>
        <CardTitle>Income vs. Expenses</CardTitle>
        <CardDescription>Your financial trends over the past 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <Skeleton className="h-full w-full" />
            </div>
          ) : data.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400">No data available</p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                  Add transactions to see your financial trends
                </p>
              </div>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}`, undefined]} labelFormatter={(label) => `Month: ${label}`} />
                <Legend />
                <Bar dataKey="Income" fill="#10b981" />
                <Bar dataKey="Expenses" fill="#6b7280" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

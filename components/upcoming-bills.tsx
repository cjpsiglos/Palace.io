import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarClock } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import type { Bill } from "@/types/dashboard"

interface UpcomingBillsProps {
  bills: Bill[]
  isLoading: boolean
}

export function UpcomingBills({ bills, isLoading }: UpcomingBillsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Bills</CardTitle>
        <CardDescription>Bills due in the next 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div>
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-20 mt-1" />
                  </div>
                </div>
                <div className="text-right">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-3 w-12 mt-1 ml-auto" />
                </div>
              </div>
            ))}
          </div>
        ) : bills.length === 0 ? (
          <div className="py-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">No upcoming bills</p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Add bills to track upcoming payments</p>
          </div>
        ) : (
          <div className="space-y-4">
            {bills.map((bill) => (
              <div key={bill.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                    <CalendarClock className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <p className="font-medium">{bill.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Due {bill.dueDate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    ${bill.amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                  <p className={`text-xs ${bill.daysLeft < 7 ? "text-red-500" : "text-gray-500 dark:text-gray-400"}`}>
                    {bill.daysLeft} days left
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

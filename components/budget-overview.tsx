import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import type { Budget } from "@/types/dashboard"

interface BudgetOverviewProps {
  budgets: Budget[]
  isLoading: boolean
}

export function BudgetOverview({ budgets, isLoading }: BudgetOverviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget</CardTitle>
        <CardDescription>Your monthly budget progress</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <Skeleton className="h-2 w-full" />
              </div>
            ))}
          </div>
        ) : budgets.length === 0 ? (
          <div className="py-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">No budgets found</p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Create a budget to track your spending</p>
          </div>
        ) : (
          <div className="space-y-4">
            {budgets.map((budget) => (
              <div key={budget.id} className="space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{budget.category}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ${budget.spent.toLocaleString()} / ${budget.budget.toLocaleString()}
                  </p>
                </div>
                <Progress
                  value={budget.percentage}
                  className={`h-2 ${budget.percentage > 100 ? "bg-red-200" : "bg-gray-200"}`}
                  indicatorClassName={budget.percentage > 100 ? "bg-red-600" : "bg-emerald-600"}
                />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

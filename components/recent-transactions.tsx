import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownRight, ShoppingBag, Home, Car, CreditCard } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import type { Transaction } from "@/types/dashboard"

interface RecentTransactionsProps {
  transactions: Transaction[]
  isLoading: boolean
}

export function RecentTransactions({ transactions, isLoading }: RecentTransactionsProps) {
  // Map transaction categories to icons
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "housing":
        return Home
      case "income":
        return ArrowDownRight
      case "food":
        return ShoppingBag
      case "transportation":
        return Car
      default:
        return CreditCard
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest financial activity</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div>
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-24 mt-1" />
                  </div>
                </div>
                <Skeleton className="h-4 w-16" />
              </div>
            ))}
          </div>
        ) : transactions.length === 0 ? (
          <div className="py-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">No transactions found</p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Add transactions to see your activity</p>
          </div>
        ) : (
          <div className="space-y-4">
            {transactions.map((transaction) => {
              const Icon = getCategoryIcon(transaction.category)
              return (
                <div key={transaction.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        transaction.amount > 0 ? "bg-emerald-100" : "bg-gray-100"
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${transaction.amount > 0 ? "text-emerald-600" : "text-gray-600"}`} />
                    </div>
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {transaction.date} • {transaction.category}
                      </p>
                    </div>
                  </div>
                  <p className={`font-semibold ${transaction.amount < 0 ? "" : "text-emerald-600"}`}>
                    {transaction.amount < 0 ? "-" : "+"}$
                    {Math.abs(transaction.amount).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
              )
            })}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, PiggyBank, Wallet } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import type { Account } from "@/types/dashboard"

interface AccountsOverviewProps {
  accounts: Account[]
  totalAssets: number
  isLoading: boolean
}

export function AccountsOverview({ accounts, totalAssets, isLoading }: AccountsOverviewProps) {
  // Map account types to icons
  const getAccountIcon = (type: string) => {
    switch (type) {
      case "checking":
        return Wallet
      case "savings":
        return PiggyBank
      case "credit":
        return CreditCard
      default:
        return Wallet
    }
  }

  return (
    <Card className="col-span-full md:col-span-1">
      <CardHeader>
        <CardTitle>Accounts</CardTitle>
        <CardDescription>Overview of your financial accounts</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div>
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-32 mt-1" />
                  </div>
                </div>
                <Skeleton className="h-4 w-16" />
              </div>
            ))}
            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center justify-between">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-20" />
              </div>
            </div>
          </div>
        ) : accounts.length === 0 ? (
          <div className="py-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">No accounts found</p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Connect your bank to get started</p>
          </div>
        ) : (
          <div className="space-y-4">
            {accounts.map((account) => {
              const Icon = getAccountIcon(account.type)
              return (
                <div key={account.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                      <Icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium">{account.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{account.change}</p>
                    </div>
                  </div>
                  <p className={`font-semibold ${account.balance < 0 ? "text-red-600" : "text-emerald-600"}`}>
                    $
                    {Math.abs(account.balance).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
              )
            })}
            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Total Assets</p>
                <p className="font-semibold text-emerald-600">
                  ${totalAssets.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

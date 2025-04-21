"use client"

import { useState } from "react"
import { AccountsOverview } from "@/components/accounts-overview"
import { BudgetOverview } from "@/components/budget-overview"
import { ExpenseChart } from "@/components/expense-chart"
import { RecentTransactions } from "@/components/recent-transactions"
import { UpcomingBills } from "@/components/upcoming-bills"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export function DashboardPage() {
  const [currentMonth, setCurrentMonth] = useState<string>("April 2025")

  // This is where you would fetch data from your server
  // Example:
  // const { data: accountsData, isLoading: accountsLoading } = useSWR('/api/accounts', fetcher)
  // const { data: budgetData, isLoading: budgetLoading } = useSWR('/api/budgets', fetcher)
  // etc.

  // For now, we'll use loading states to show how the UI would look while data is loading
  const isLoading = false

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
        <DashboardSidebar />
        <div className="flex-1">
          <DashboardHeader currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
          <main className="p-4 md:p-6 max-w-7xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AccountsOverview isLoading={isLoading} accounts={[]} totalAssets={0} />
              <BudgetOverview isLoading={isLoading} budgets={[]} />
              <UpcomingBills isLoading={isLoading} bills={[]} />
            </div>
            <div className="grid gap-6 mt-6 md:grid-cols-2">
              <ExpenseChart isLoading={isLoading} data={[]} />
              <RecentTransactions isLoading={isLoading} transactions={[]} />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

"use client"

import { CalendarIcon, ChevronDown, BellIcon, UserCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface DashboardHeaderProps {
  currentMonth: string
  setCurrentMonth: (month: string) => void
}

export function DashboardHeader({ currentMonth, setCurrentMonth }: DashboardHeaderProps) {
  const months = ["January 2025", "February 2025", "March 2025", "April 2025", "May 2025", "June 2025"]

  return (
    <header className="border-b bg-white dark:bg-gray-950 px-4 py-3 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <CalendarIcon className="h-4 w-4" />
                {currentMonth}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {months.map((month) => (
                <DropdownMenuItem
                  key={month}
                  onClick={() => setCurrentMonth(month)}
                  className={month === currentMonth ? "bg-gray-100 dark:bg-gray-800" : ""}
                >
                  {month}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <BellIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <UserCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

// Account types
export interface Account {
  id: string
  name: string
  balance: number
  type: "checking" | "savings" | "credit" | "investment"
  change: string
}

// Budget types
export interface Budget {
  id: string
  category: string
  spent: number
  budget: number
  percentage: number
}

// Transaction types
export interface Transaction {
  id: string
  description: string
  amount: number
  date: string
  category: string
}

// Bill types
export interface Bill {
  id: string
  name: string
  amount: number
  dueDate: string
  daysLeft: number
}

// Chart data types
export interface ChartDataPoint {
  name: string
  Income: number
  Expenses: number
}

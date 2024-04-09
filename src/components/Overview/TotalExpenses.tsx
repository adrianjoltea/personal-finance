import { useTotalExpensesIncomes } from "./hooks/useTotalExpensesIncomes";

export default function TotalExpenses() {
  const totalExpense = useTotalExpensesIncomes(false);

  return (
    <div className="transactions-overview transactions-overview-green">
      Total Expenses: {totalExpense}
    </div>
  );
}

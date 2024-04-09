import { useTotalExpensesIncomes } from "./hooks/useTotalExpensesIncomes";

export default function TotalIncomes() {
  const totalIncome = useTotalExpensesIncomes(true);
  return (
    <div className="transactions-overview transactions-overview-yellow">
      Total Incomes: {totalIncome}
    </div>
  );
}

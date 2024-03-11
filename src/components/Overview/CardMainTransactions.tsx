import BiggestExpense from "./BiggestExpense";
import BiggestIncome from "./BiggestIncome";
import TotalExpenses from "./TotalExpenses";
import TotalIncomes from "./TotalIncomes";

export default function CardMainTransactions() {
  return (
    <div className="card-main-transactions">
      <BiggestIncome />
      <BiggestExpense />
      <TotalIncomes />
      <TotalExpenses />
    </div>
  );
}

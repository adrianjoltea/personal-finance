import BiggestExpense from "./BiggestExpense";
import BiggestIncome from "./BiggestIncome";
import TotalExpenses from "./TotalExpenses";
import TotalIncomes from "./TotalIncomes";

export default function CardMainTransactions() {
  return (
    <div className="card-main-transactions">
      <div className="card-main-transactions-divider">
        <BiggestIncome />
        <TotalIncomes />
      </div>
      <div className="card-main-transactions-divider">
        <BiggestExpense />
        <TotalExpenses />
      </div>
    </div>
  );
}

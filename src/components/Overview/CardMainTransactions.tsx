import { useTransactions } from "../Transactions/hooks/useTransactions";
import BiggestExpense from "./BiggestExpense";
import BiggestIncome from "./BiggestIncome";
import TotalExpenses from "./TotalExpenses";
import TotalIncomes from "./TotalIncomes";

export default function CardMainTransactions() {
  const { loading } = useTransactions();

  return (
    <div className="card-main-transactions">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <div className="card-main-transactions-divider">
            <BiggestIncome />
            <TotalIncomes />
          </div>
          <div className="card-main-transactions-divider">
            <BiggestExpense />
            <TotalExpenses />
          </div>
        </>
      )}
    </div>
  );
}

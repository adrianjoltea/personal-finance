import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";
import { useCalculateExpense } from "./hooks/useCalculateExpense";

export default function BiggestIncome() {
  const biggestIncomeTransaction = useCalculateExpense(true);

  return (
    <div className="transactions-overview transactions-overview-blue">
      <h4>Biggest Income</h4>
      {biggestIncomeTransaction ? (
        <div>
          <span>{formatCurrency(biggestIncomeTransaction.amount)}$</span>
          <p>Created At: {formatDate(biggestIncomeTransaction.createdAt)}</p>
          <p>Description: {biggestIncomeTransaction.description}</p>
        </div>
      ) : (
        <span>No income data available</span>
      )}
    </div>
  );
}

import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";
import { useCalculateExpense } from "./hooks/useCalculateExpense";

export default function BiggestExpense() {
  const biggestExpenseTransaction = useCalculateExpense(false);

  return (
    <div className="transactions-overview transactions-overview-red">
      <h4>Biggest Expense</h4>
      {biggestExpenseTransaction ? (
        <div>
          <span>{formatCurrency(biggestExpenseTransaction.amount)}$</span>
          <p>Created At: {formatDate(biggestExpenseTransaction.createdAt)}</p>
          <p>Description: {biggestExpenseTransaction.description}</p>
        </div>
      ) : (
        <span>No income data available</span>
      )}
    </div>
  );
}

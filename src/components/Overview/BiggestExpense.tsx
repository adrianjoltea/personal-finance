import { formatCurrency } from "../../hooks/useFormatCurrency";
import { formatDate } from "../../hooks/useFormatDate";
import { useTransactions } from "./useTransactions";

export default function BiggestExpense() {
  const transactions = useTransactions();

  const biggestExpenseTransaction = transactions?.reduce(
    (maxExpenseTransaction, currentTransaction) => {
      return currentTransaction.amount < maxExpenseTransaction.amount
        ? currentTransaction
        : maxExpenseTransaction;
    },
    transactions[0]
  );
  return (
    <div>
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

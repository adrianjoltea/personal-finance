import { formatCurrency } from "../../hooks/useFormatCurrency";
import { formatDate } from "../../hooks/useFormatDate";
import { useTransactions } from "../Transactions/getTransactions";

export default function BiggestIncome() {
  const { transactions } = useTransactions();

  const biggestIncomeTransaction = transactions?.reduce(
    (maxIncomeTransaction, currentTransaction) => {
      return currentTransaction.amount > maxIncomeTransaction.amount
        ? currentTransaction
        : maxIncomeTransaction;
    },
    transactions[0]
  );
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

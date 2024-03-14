import { useTransactions } from "./useTransactions";

export default function TotalExpenses() {
  const { transactions = [] } = useTransactions();

  const totaExpense = transactions.reduce((acc, cur) => {
    if (cur.amount < 0) {
      acc += cur.amount;
    }
    return acc;
  }, 0);

  return (
    <div className="transactions-overview transactions-overview-green">
      Total Expenses: {totaExpense}
    </div>
  );
}

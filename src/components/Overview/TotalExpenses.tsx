import { useMemo } from "react";
import { useTransactions } from "../Transactions/getTransactions";

export default function TotalExpenses() {
  const { transactions } = useTransactions();

  const totalExpense = useMemo(() => {
    return transactions?.reduce((acc, cur) => {
      if (cur.amount < 0) {
        acc += cur.amount;
      }
      return acc;
    }, 0);
  }, [transactions]);

  return (
    <div className="transactions-overview transactions-overview-green">
      Total Expenses: {totalExpense}
    </div>
  );
}

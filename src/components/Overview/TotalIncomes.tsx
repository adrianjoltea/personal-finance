import { useTransactions } from "./useTransactions";

export default function TotalIncomes() {
  const transactions = useTransactions();

  const totalIncome = transactions.reduce((acc, cur) => {
    if (cur.amount > 0) {
      acc += cur.amount;
    }
    return acc;
  }, 0);

  return <div>TotalIncomes: {totalIncome}</div>;
}

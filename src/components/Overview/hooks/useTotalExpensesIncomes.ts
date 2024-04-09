import { useTransactions } from "../../Transactions/hooks/useTransactions";

export function useTotalExpensesIncomes(income: boolean) {
  const { transactions } = useTransactions();

  if (!transactions) {
    return null;
  }

  return transactions.reduce((acc, cur) => {
    if ((income && cur.amount > 0) || (!income && cur.amount < 0)) {
      acc += cur.amount;
    }
    return acc;
  }, 0);
}

import { useTransactions } from "../../Transactions/hooks/useTransactions";

export function useCalculateExpense(income: boolean) {
  const { transactions } = useTransactions();

  if (!transactions) return null;

  return transactions.reduce((maxExpense, current) => {
    if (income)
      return current.amount > maxExpense.amount ? current : maxExpense;
    return current.amount < maxExpense.amount ? current : maxExpense;
  });
}

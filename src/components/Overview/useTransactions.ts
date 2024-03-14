import { useEffect, useState } from "react";
import getTransactions from "../Transactions/getTransactions";

interface Transaction {
  amount: number;
  description: string;
  createdAt: Date;
  category: string;
}

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[] | undefined>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const transactionsData = await getTransactions();
        setTransactions(transactionsData);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return { transactions, loading };
}

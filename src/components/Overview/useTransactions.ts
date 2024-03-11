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

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const transactionsData = await getTransactions();
        setTransactions(transactionsData);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return transactions ?? [];
}

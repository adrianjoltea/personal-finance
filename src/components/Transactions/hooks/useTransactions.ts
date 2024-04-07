import { useQuery } from "@tanstack/react-query";
import { fetchTransactions } from "../../../services/apiTransanctions";

export function useTransactions() {
  const {
    data: transactionData,
    isLoading: isLoading,
    refetch: refetchTransactions,
  } = useQuery({ queryKey: ["transactions"], queryFn: fetchTransactions });

  console.log(transactionData);
  const transactions = transactionData?.data;

  return {
    transactions,
    loading: isLoading,
    refetchTransactions,
  };
}

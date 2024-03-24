import { fetchTransactions } from "../../services/apiTransanctions";

export default async function getTransactions() {
  try {
    const { data } = await fetchTransactions();

    return data;
  } catch (err) {
    console.log(err);
  }
}
import { useQuery } from "@tanstack/react-query";

export function useTransactions() {
  const {
    data: transactionData,
    isLoading: isLoading,
    refetch: refetchTransactions,
  } = useQuery({ queryKey: ["transactions"], queryFn: fetchTransactions });

  const transactions = transactionData?.data;

  return {
    transactions,
    loading: isLoading,
    refetchTransactions,
  };
}

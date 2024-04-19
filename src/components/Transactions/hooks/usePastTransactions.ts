import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { fetchPastTransactions } from "../../../services/apiTransanctions";

export function usePastTranscations() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("days")
    ? 7
    : Number(searchParams.get("days"));

  const { isLoading, data: pastTransactions } = useQuery({
    queryFn: () => fetchPastTransactions(numDays || 7),
    queryKey: ["transactions", `last-${numDays}`],
  });
  const pastTransaction = pastTransactions?.data;

  return { isLoading, pastTransaction };
}

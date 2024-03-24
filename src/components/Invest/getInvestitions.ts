import { useQuery } from "@tanstack/react-query";
import { getStocks, getStocksUser } from "../../services/apiInvestitions";

export function useStocks() {
  const {
    data: stocksData,
    isLoading: isStocksLoading,
    refetch: refetchStocks,
  } = useQuery({ queryKey: ["stocks"], queryFn: getStocksUser });
  const { data: availableStocksData, isLoading: isAvailableStocksLoading } =
    useQuery({ queryKey: ["availableStocks"], queryFn: getStocks });

  const stocks = stocksData?.data;
  const availableStocks = availableStocksData?.data;

  return {
    stocks,
    loading: isStocksLoading || isAvailableStocksLoading,
    availableStocks,
    refetchStocks,
  };
}

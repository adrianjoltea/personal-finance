import { useEffect, useState } from "react";
import { getStocks, getStocksUser } from "../../services/apiInvestitions";
interface Stocks {
  amount: number;
  boughtPrice: number;
  user: string;
  _id: string;
  stockId: string;
  name: string;
}

interface AvailableStocks {
  name: string;
  currentValue: number;
  previousValue: [number];
  changePercent: number;
  _id: string;
}
export function useStocks() {
  const [stocks, setStocks] = useState<Stocks[] | undefined>([]);
  const [availableStocks, setAvailableStocks] = useState<AvailableStocks[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        setLoading(true);
        const stocksData = await getStocksUser();
        const availableStocksData = await getStocks();
        setStocks(stocksData.data);
        setAvailableStocks(availableStocksData.data);
      } catch (error) {
        console.error("Error fetching Stocks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  return { stocks, loading, availableStocks };
}

interface Investitions {
  amount: number;
  chance: number;
  name: string;
  description: string;
}

interface Stocks {
  amount: number;
  boughtPrice: number;
  user: string;
  _id: string;
  stockId: string;
  name: string;
}

interface BuyStocks {
  amount: number;
  boughtPrice: number;
  _id: string;
  name?: string;
  cardId: string;
}

interface BuyStocksResponse {
  data: BuyStocks[];
}

interface AvailableStocks {
  name: string;
  currentValue: number;
  previousValue: [number];
  changePercent: number;
  _id: string;
}

interface SellStocks {
  amount: number;
  _id: string;
  sellPrice: number | undefined;
  cardId: string;
}

interface SellStocksResponse {
  data: SellStocks[];
}

interface AvailableStocksResponse {
  data: AvailableStocks[];
}

interface StocksResponse {
  data: Stocks[];
}

interface InvestitionsResponse {
  data: Investitions[];
}

export type {
  Investitions,
  InvestitionsResponse,
  Stocks,
  StocksResponse,
  SellStocks,
  SellStocksResponse,
  AvailableStocks,
  AvailableStocksResponse,
  BuyStocks,
  BuyStocksResponse,
};

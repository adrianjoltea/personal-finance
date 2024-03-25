interface Investitions {
  currentValue: number;
  changePercent: number;
  name: string;
  previousValue: number[];
  _id: string;
}

interface BoughtStock {
  amount: number;
  boughtPrice: number;
  i: number;
  stockId: string;
  cardId: string;
  sellPriceId: string;
  name: string;
}

interface StockData {
  previousValue: number[];
}

interface StockLineChartProps {
  data: StockData;
}

interface StockModalInterface {
  _id: string;
  name: string;
  currentValue: number;
}

export type {
  Investitions,
  BoughtStock,
  StockData,
  StockLineChartProps,
  StockModalInterface,
};

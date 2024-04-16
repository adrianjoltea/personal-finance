interface MainCardProps {
  _id?: string;
  name: string;
  balance: number;
  currency: string;
  firstColor: string;
  secondColor: string;
}
type LegendOptions = {
  display: boolean;
  position: "top" | "bottom" | "left" | "right" | "chartArea";
  labels: {
    color: string;
    padding: number;
  };
};

type ChartOptions = {
  plugins: {
    legend: LegendOptions;
  };
};

interface Transactions {
  amount: number;
  description: string;
  createdAt: Date;
  category: string;
}

export type { MainCardProps, ChartOptions, Transactions };

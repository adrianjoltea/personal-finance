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
interface MainTransactions {
  mainTransactions: {
    biggestIncome: string;
    createdAt: string;
    biggestExpense: string;
    description: string;
    totalIncomes: string;
    totalExpenses: string;
  };
}

interface TransactionChartProps {
  transactionChart: {
    last: string;
    days: string;
    income: string;
    expenses: string;
  };
}

interface TransactionPieProps {
  transactionPie: {
    [key: string]: string;
    job: string;
    sideJob: string;
    freelancing: string;
    other: string;
    utilities: string;
    groceries: string;
    entertainment: string;
    travel: string;
    miscellaneous: string;
  };
}

interface TransactionHistoryProps {
  transactionHistory: {
    amount: string;
    category: string;
    createdAt: string;
    description: string;
    transactionHistory: string;
    deposit: string;
    withdraw: string;
  };
}

interface TransactionOptionProps {
  options: {
    sortAmount: string;
    sortDescription: string;
    sortCreatedAt: string;
    sortCategory: string;
  };
}

export type {
  MainCardProps,
  ChartOptions,
  Transactions,
  MainTransactions,
  TransactionChartProps,
  TransactionPieProps,
  TransactionHistoryProps,
  TransactionOptionProps,
};

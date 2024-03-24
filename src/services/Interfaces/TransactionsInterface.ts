interface transactions {
  amount: number;
  description: string;
  createdAt: Date;
  category: string;
}

interface TransactionsRespose {
  data: transactions[];
}

interface transactionProps {
  amount: number | string;
  description: string;
  bankAccountId: string;
  category: string;
}

interface PastTransactions {
  day: Date;
  expense: number;
  income: number;
}

interface PastTransactionsResponse {
  data: PastTransactions[];
}

export type {
  transactionProps,
  transactions,
  TransactionsRespose,
  PastTransactions,
  PastTransactionsResponse,
};

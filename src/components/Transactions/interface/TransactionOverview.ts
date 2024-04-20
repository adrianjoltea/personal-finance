interface ModalTransactionProps {
  amount: string;
  description: string;
  category: string;
  enterAmount: string;
  enterDescription: string;
  enterCategory: string;
  withdraw: string;
  deposit: string;
  categories: {
    job: string;
    sidejob: string;
    freelancing: string;
    other: string;
    utilities: string;
    groceries: string;
    entertainment: string;
    travel: string;
    miscellaneous: string;
  };
}

export type { ModalTransactionProps };

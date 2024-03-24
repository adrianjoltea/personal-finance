interface DeleteProps {
  _id: string;
}

interface CardsData {
  id: string;
  name: string;
  balance: number;
  currency: string;
}

interface FetchCardsData {
  data: CardsData[];
}

interface BankAccounts {
  name: string;
  balance: number;
  currency: string;
}

interface UpdateBankAccountData {
  balance: number;
  userId: string;
}

interface FetchBankAccounts {
  data: BankAccounts;
}

export type {
  FetchBankAccounts,
  FetchCardsData,
  UpdateBankAccountData,
  DeleteProps,
  CardsData,
  BankAccounts,
};

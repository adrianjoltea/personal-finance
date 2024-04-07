import { apiUrl2 } from "../common/variables";
import {
  AddTransactionResponse,
  PastTransactions,
  PastTransactionsResponse,
  TransactionsRespose,
  transactionProps,
  transactions,
} from "./Interfaces/TransactionsInterface";
import { fetchData } from "./reusableApi";

export async function fetchTransactions(): Promise<TransactionsRespose> {
  try {
    const data: transactions[] = await fetchData(
      `${apiUrl2}/transactions/get`,
      "GET"
    );
    return { data };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function fetchPastTransactions(
  day: string | number
): Promise<PastTransactionsResponse> {
  try {
    const data: PastTransactions[] = await fetchData(
      `${apiUrl2}/transactions/past-transactions/${day}`,
      "GET"
    );
    return { data };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function addTransaction(
  dataApi: transactionProps
): Promise<AddTransactionResponse> {
  try {
    const data: transactionProps = await fetchData(
      `${apiUrl2}/transactions/transaction`,
      "POST",
      dataApi
    );

    const currentMainCard = JSON.parse(
      localStorage.getItem("mainCard") || "{}"
    );
    console.log(data);
    const updatedMainCard = {
      ...currentMainCard,
      balance: currentMainCard.balance + data.amount,
    };
    localStorage.setItem("mainCard", JSON.stringify(updatedMainCard));
    return { data };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

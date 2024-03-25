import { apiUrl, apiUrl2 } from "../common/variables";
import {
  PastTransactionsResponse,
  TransactionsRespose,
  transactionProps,
} from "./Interfaces/TransactionsInterface";
import { fetchData } from "./reusableApi";

export async function fetchTransactions(): Promise<TransactionsRespose> {
  try {
    const data = await fetchData(`${apiUrl2}/transactions/get`, "GET");
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
    const data = await fetchData(
      `${apiUrl2}/transactions/past-transactions/${day}`,
      "GET"
    );
    return { data };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function withdraw(
  dataApi: transactionProps
): Promise<PastTransactionsResponse> {
  try {
    const data = await fetchData(
      `${apiUrl}/transactions/withdraw`,
      "POST",
      dataApi
    );
    return { data };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function addTransaction(
  dataApi: transactionProps
): Promise<TransactionsRespose> {
  try {
    const data = await fetchData(
      `${apiUrl2}/transactions/transaction`,
      "POST",
      dataApi
    );
    const currentMainCard = JSON.parse(
      localStorage.getItem("mainCard") || "{}"
    );
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

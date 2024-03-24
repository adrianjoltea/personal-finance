import { apiUrl, apiUrl2 } from "../common/variables";
import {
  BankAccounts,
  CardsData,
  DeleteProps,
  FetchBankAccounts,
  FetchCardsData,
  UpdateBankAccountData,
} from "./Interfaces/BankInterface";

export async function deleteCard({ _id }: DeleteProps) {
  try {
    const submitData = {
      _id,
    };
    const res = await fetch(`${apiUrl2}/bankaccounts/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(submitData),
    });
    if (!res.ok) throw new Error("Could not delete the card");

    const data = await res.json();
    return { data };
  } catch (err) {
    console.log(err);
  }
}

export async function fetchCardsUser(): Promise<FetchCardsData> {
  try {
    const res = await fetch(`${apiUrl2}/bankaccounts/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    if (!res.ok) throw new Error("Could not get the curent user cards");

    const data: CardsData[] = await res.json();
    return { data };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function createBankAccounts(
  dataUser: BankAccounts
): Promise<FetchBankAccounts> {
  try {
    const res = await fetch(`${apiUrl2}/bankaccounts/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(dataUser),
    });

    if (!res.ok) throw new Error("Could not get the curent user cards");

    const data: BankAccounts = await res.json();
    return { data };
  } catch (err) {
    console.log(err);
    throw err;
  }
}
export async function updateBankAccount(
  accountId: string,
  data: UpdateBankAccountData
): Promise<FetchBankAccounts> {
  try {
    const res = await fetch(`${apiUrl}/bank-accounts/${accountId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Could not update the bank account");

    const updatedData = await res.json();
    return { data: updatedData };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

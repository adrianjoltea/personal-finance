import { apiUrl, apiUrl2 } from "../common/variables";
import {
  BankAccounts,
  CardsData,
  DeleteProps,
  FetchBankAccounts,
  FetchCardsData,
  UpdateBankAccountData,
} from "./Interfaces/BankInterface";
import { fetchData } from "./reusableApi";

// export async function deleteCard({ _id }: DeleteProps) {
//   try {
//     const submitData = { _id };
//     console.log(submitData);
//     await fetchData(`${apiUrl2}/bankaccounts/delete`, "DELETE", submitData);
//     return;
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// }

export async function deleteCard({ _id }: DeleteProps): Promise<void> {
  try {
    const submitData = { _id };
    console.log(submitData);
    const response = await fetch(`${apiUrl2}/bankaccounts/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    });

    if (!response.ok) {
      throw new Error("Failed to delete card");
    }
    return;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function fetchCardsUser(): Promise<FetchCardsData> {
  try {
    const data: CardsData[] = await fetchData(
      `${apiUrl2}/bankaccounts/get`,
      "GET"
    );
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
    const data: BankAccounts = await fetchData(
      `${apiUrl2}/bankaccounts/create`,
      "POST",
      dataUser
    );
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
    const updatedData = await fetchData<
      FetchBankAccounts,
      UpdateBankAccountData
    >(`${apiUrl}/bank-accounts/${accountId}`, "PUT", data);
    return { data: updatedData.data };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

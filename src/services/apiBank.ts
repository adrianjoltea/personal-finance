import { apiUrl } from "../common/variables";

interface Bank {
  id: string;
  name: string;
}
interface FetchBankResponse {
  data: Bank[];
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
  bankId: string;
  userId: string;
}

interface FetchBankAccounts {
  data: BankAccounts;
}
export async function fetchBanks(): Promise<FetchBankResponse> {
  try {
    const res = await fetch(`${apiUrl}/banks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Could not get the banks");

    const data: Bank[] = await res.json();

    console.log(data);
    return { data };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function fetchCardsUser(userId: string): Promise<FetchCardsData> {
  try {
    const res = await fetch(`${apiUrl}/bank-accounts/user/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    if (!res.ok) throw new Error("Could not get the curent user cards");

    const data: CardsData[] = await res.json();
    console.log(data);
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
    const res = await fetch(`${apiUrl}/bank-accounts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(dataUser),
    });

    if (!res.ok) throw new Error("Could not get the curent user cards");

    const data: BankAccounts = await res.json();
    console.log(data);
    return { data };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

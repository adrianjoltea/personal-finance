import { apiUrl } from "../common/variables";

interface transactions {
  amount: number;
  description: string;
}

interface TransactionsRespose {
  data: transactions[];
}

interface transactionProps {
  amount: number | string;
  description: string;
  bankAccountId: string;
}

export async function fetchTransactions(): Promise<TransactionsRespose> {
  try {
    const res = await fetch(`${apiUrl}/transactions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    if (!res.ok) throw new Error("Could not get the transactions");

    const data: transactions[] = await res.json();

    console.log(data);
    return { data };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function withdraw(
  dataApi: transactionProps
): Promise<TransactionsRespose> {
  try {
    const res = await fetch(`${apiUrl}/transactions/withdraw`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(dataApi),
    });

    if (!res.ok) throw new Error("Could not add an transaction");

    const data = await res.json();

    console.log(data);
    return { data };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function deposit(
  dataApi: transactionProps
): Promise<TransactionsRespose> {
  try {
    const res = await fetch(`${apiUrl}/transactions/deposit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(dataApi),
    });

    if (!res.ok) throw new Error("Could not add an transaction");

    const data = await res.json();

    console.log(data);
    return { data };
  } catch (err) {
    console.log(err);
    throw err;
  }
}
// type Value = Awaited<ReturnType<typeof deposit>>;

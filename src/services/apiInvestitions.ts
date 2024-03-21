import { apiUrl2 } from "../common/variables";

interface Investitions {
  amount: number;
  chance: number;
  name: string;
  description: string;
}

interface Stocks {
  amount: number;
  boughtPrice: number;
  user: string;
}

interface BuyStocks {
  amount: number;
  boughtPrice: number;
  _id: string;
  name?: string;
  cardId: string;
}

interface AvailableStocks {
  name: string;
  currentValue: number;
  previousValue: [number];
  changePercent: number;
  _id: string;
}

interface AvailableStocksResponse {
  data: AvailableStocks[];
}

interface StocksResponse {
  data: Stocks[];
}

interface InvestitionsResponse {
  data: Investitions[];
}

export async function getInvetitions(): Promise<InvestitionsResponse> {
  try {
    const res = await fetch(`${apiUrl2}/invest/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error("Could not get the banks");

    const data: Investitions[] = await res.json();

    console.log(data);
    return { data };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function buyStocks(dataApi: BuyStocks) {
  try {
    const res = await fetch(`${apiUrl2}/invest/add-stock`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(dataApi),
    });

    if (!res.ok) throw new Error("Could not send the investition");

    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getStocksUser(): Promise<StocksResponse> {
  try {
    const res = await fetch(`${apiUrl2}/invest/see-stocks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    if (!res.ok) throw new Error("Could not get the stocks");

    const data: Stocks[] = await res.json();

    console.log(data);
    return { data };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getStocks(): Promise<AvailableStocksResponse> {
  try {
    const res = await fetch(`${apiUrl2}/invest/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    if (!res.ok) throw new Error("Could not get the stocks");

    const data: AvailableStocks[] = await res.json();

    console.log(data);
    return { data };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

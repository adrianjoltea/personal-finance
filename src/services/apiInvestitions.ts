import { apiUrl2 } from "../common/variables";
import {
  AvailableStocks,
  AvailableStocksResponse,
  BuyStocks,
  BuyStocksResponse,
  Investitions,
  InvestitionsResponse,
  SellStocks,
  SellStocksResponse,
  Stocks,
  StocksResponse,
} from "./Interfaces/Investitions";

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

    return { data };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function buyStocks(
  dataApi: BuyStocks
): Promise<BuyStocksResponse> {
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

    return { data };
  } catch (err) {
    console.log(err);
    throw err;
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

    return { data };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function sellStocks(
  dataApi: SellStocks
): Promise<SellStocksResponse> {
  try {
    const res = await fetch(`${apiUrl2}/invest/sell-stock`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(dataApi),
    });

    if (!res.ok) throw new Error("Could not get the stocks");

    const data = await res.json();
    return { data };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

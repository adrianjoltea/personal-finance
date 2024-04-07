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
import { fetchData } from "./reusableApi";

export async function getInvetitions(): Promise<InvestitionsResponse> {
  try {
    const data: Investitions[] = await fetchData(
      `${apiUrl2}/invest/get`,
      "GET"
    );
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
    const data = await fetchData<BuyStocksResponse, BuyStocks>(
      `${apiUrl2}/invest/add-stock`,
      "POST",
      dataApi
    );
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getStocksUser(): Promise<StocksResponse> {
  try {
    const data: Stocks[] = await fetchData(
      `${apiUrl2}/invest/see-stocks`,
      "GET"
    );
    return { data };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getStocks(): Promise<AvailableStocksResponse> {
  try {
    const data: AvailableStocks[] = await fetchData(
      `${apiUrl2}/invest/`,
      "GET"
    );
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
    const data = await fetchData<SellStocksResponse, SellStocks>(
      `${apiUrl2}/invest/sell-stock`,
      "PATCH",
      dataApi
    );
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

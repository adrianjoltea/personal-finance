import { sellStocks } from "../../services/apiInvestitions";

interface SellStockData {
  amount: number;
  sellPrice: number | undefined;
  _id: string;
  cardId: string;
}
export default async function sellStock(dataApi: SellStockData) {
  try {
    const { data } = await sellStocks(dataApi);

    return data;
  } catch (err) {
    console.log(err);
  }
}

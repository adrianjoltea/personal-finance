import { buyStocks } from "../../services/apiInvestitions";

interface withdrawProps {
  amount: number;
  boughtPrice: number;
  _id: string;
  name?: string;
  cardId: string;
}
export default async function addStock(dataApi: withdrawProps) {
  try {
    const { data } = await buyStocks(dataApi);

    return data;
  } catch (err) {
    console.log(err);
  }
}

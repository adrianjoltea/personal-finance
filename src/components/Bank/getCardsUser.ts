import { fetchCardsUser } from "../../services/apiBank";

interface CardResults {
  id: string;
  name: string;
  balance: number;
  currency: string;
}

export default async function getCardsUser(): Promise<CardResults[]> {
  try {
    const { data } = await fetchCardsUser();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

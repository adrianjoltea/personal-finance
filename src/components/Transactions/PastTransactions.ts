import { fetchPastTransactions } from "../../services/apiTransanctions";

export default async function getPastTransactions(day: number) {
  try {
    const { data } = await fetchPastTransactions(day);

    return data;
  } catch (err) {
    console.log(err);
  }
}

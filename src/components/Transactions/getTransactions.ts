import { fetchTransactions } from "../../services/apiTransanctions";

export default async function getTransactions() {
  try {
    const { data } = await fetchTransactions();

    return data;
  } catch (err) {
    console.log(err);
  }
}

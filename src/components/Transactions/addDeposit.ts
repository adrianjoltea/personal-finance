import { addTransaction } from "../../services/apiTransanctions";

interface withdrawProps {
  amount: number;
  description: string;
  bankAccountId: string;
  category: string;
}

export default async function transaction(dataApi: withdrawProps) {
  try {
    const { data } = await addTransaction(dataApi);
    return data;
  } catch (err) {
    console.log(err);
  }
}

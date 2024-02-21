import { deposit } from "../../services/apiTransanctions";

interface withdrawProps {
  amount: number;
  description: string;
  bankAccountId: string;
}

export default async function addDeposit(dataApi: withdrawProps) {
  try {
    const { data } = await deposit(dataApi);

    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

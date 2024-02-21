import { withdraw } from "../../services/apiTransanctions";

interface withdrawProps {
  amount: number;
  description: string;
  bankAccountId: string;
}

export default async function addWithdraw(dataApi: withdrawProps) {
  try {
    const { data } = await withdraw(dataApi);

    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

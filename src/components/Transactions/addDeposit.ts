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

    // const updateData = {
    //   balance: data.amount,
    //   userId: data.id,
    // };
    // console.log(updateData);

    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

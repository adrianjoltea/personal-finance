import { createBankAccounts } from "../../services/apiBank";

interface BankAccounts {
  name: string;
  balance: number;
  currency: string;
  bankId: string;
  userId: string;
}

export default async function CreateBankAccount(dataCard: BankAccounts) {
  try {
    const { data } = await createBankAccounts(dataCard);

    return data;
  } catch (err) {
    console.error(err);
  }
}

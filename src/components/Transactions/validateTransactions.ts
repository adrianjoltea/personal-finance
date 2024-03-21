interface Card {
  _id: string;
  name: string;
  balance: number;
  currency: string;
}

export function validateTransaction(
  amount: string,
  description: string,
  mainCard: Card,
  withdraw?: boolean
) {
  if (!mainCard._id) {
    return "Please select a card";
  }

  if (!amount || !description) {
    return "Please fill out all the fields";
  }

  if (parseFloat(amount) <= 0) {
    return "Amount must be greater than 0";
  }

  if (withdraw && parseFloat(amount) > mainCard.balance) {
    return "The amount is greater than the balance";
  }

  return null;
}

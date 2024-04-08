import toast from "react-hot-toast";
interface Card {
  _id: string;
  name: string;
  balance: number;
  currency: string;
}

export function validateTransaction(
  amount?: string,
  description?: string,
  mainCard?: Card,
  withdraw?: boolean
) {
  if (!mainCard?._id) {
    return "Please select a card";
  }

  if (!amount || !description) {
    return "Please fill out all the fields";
  }

  if (amount && parseFloat(amount) <= 0) {
    return "Amount must be greater than 0";
  }

  if (withdraw && parseFloat(amount) > mainCard.balance) {
    return "The amount is greater than the balance";
  }

  return null;
}

export function validateTransactionToast(
  amount?: string,
  description?: string,
  mainCard?: Card,
  withdraw?: boolean
) {
  const validationError = validateTransaction(
    amount,
    description,
    mainCard,
    withdraw
  );

  if (validationError) {
    toast.error(validationError, {
      className: "toast",
    });
    return true;
  }
  return false;
}

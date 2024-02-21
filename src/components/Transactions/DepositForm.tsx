import React, { useState } from "react";
import Input from "../ui/Input";
import { useSelector } from "react-redux";
import { getMainCard } from "../../context/userCardsSlice";
import addDeposit from "./addDeposit";

export default function DepositForm() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const mainCard = useSelector(getMainCard);
  const submitData = {
    amount: parseFloat(amount),
    description,
    bankAccountId: mainCard.id,
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(submitData);
    addDeposit(submitData);
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <Input
          type="number"
          id="amount"
          name="amount"
          placeholder="Enter your amount"
          content="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <Input
          type="string"
          id="description"
          name="description"
          placeholder="Enter your description"
          content="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <div>
          <button className="btn">Deposit</button>
        </div>
      </form>
    </>
  );
}

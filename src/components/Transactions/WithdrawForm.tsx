import React, { useState } from "react";
import Input from "../ui/Input";
import { useSelector } from "react-redux";
import { getMainCard } from "../../context/userCardsSlice";
import transaction from "./addDeposit";
import Card from "../Overview/Card";

export default function WithdrawForm() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const mainCard = useSelector(getMainCard);

  const submitData = {
    amount: -parseFloat(amount),
    description,
    bankAccountId: mainCard._id,
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(submitData);
    if (parseFloat(amount) > 0) {
      transaction(submitData);
    }
  }

  return (
    <>
      <div className="card-transactions-container">
        <Card />
      </div>
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
        <div className="form-btn">
          <button className="btn btn-form">Withdraw</button>
        </div>
      </form>
    </>
  );
}

import React, { useState } from "react";
import Input from "../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { getMainCard } from "../../context/userCardsSlice";
import transaction from "./addDeposit";
import Card from "../Overview/Card";
import toast from "react-hot-toast";
import { toggleModal } from "../../context/modalSlice";

export default function WithdrawForm() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Miscellaneous");
  const dispatch = useDispatch();
  const mainCard = useSelector(getMainCard);

  const submitData = {
    amount: -parseFloat(amount),
    description,
    bankAccountId: mainCard._id,
    category,
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!amount || !description) toast.error("Please fill out the fields");

    if (parseFloat(amount) <= 0) {
      toast.error("Amount must be greater than 0");
      return;
    }

    if (parseFloat(amount) > 0) {
      transaction(submitData);
      dispatch(toggleModal({ modalId: "withdraw", open: false }));
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
          type="text"
          id="description"
          name="description"
          placeholder="Enter your description"
          content="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <div className="form-group">
          <label htmlFor="category" className="form-label">
            Category:
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="form-input"
          >
            <option value="Utilities">Utilities</option>
            <option value="Groceries">Groceries</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Travel">Travel</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>
        <div className="form-btn">
          <button className="btn btn-form">Withdraw</button>
        </div>
      </form>
    </>
  );
}

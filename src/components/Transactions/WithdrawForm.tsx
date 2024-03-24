import React, { useState } from "react";
import Input from "../Ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { getMainCard } from "../../context/userCardsSlice";

import Card from "../Overview/Card";
import toast from "react-hot-toast";
import { toggleModal } from "../../context/modalSlice";
import { validateTransaction } from "./validateTransactions";
import { useAddTransaction } from "./addDeposit";

export default function WithdrawForm() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Miscellaneous");
  const dispatch = useDispatch();
  const mainCard = useSelector(getMainCard);
  const { isLoading, addTransactions } = useAddTransaction();
  const submitData = {
    amount: -parseFloat(amount),
    description,
    bankAccountId: mainCard._id,
    category,
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationError = validateTransaction(
      amount,
      description,
      mainCard,
      true
    );
    if (validationError) {
      toast.error(validationError, {
        className: "toast",
      });
    }
    if (!validationError && parseFloat(amount) <= mainCard.balance) {
      addTransactions(submitData);

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
          <button className="btn btn-form" disabled={isLoading}>
            Withdraw
          </button>
        </div>
      </form>
    </>
  );
}

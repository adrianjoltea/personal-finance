import React, { useState } from "react";
import Input from "../Ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { getMainCard } from "../../context/userCardsSlice";
import { useAddTransaction } from "./hooks/useAddTransaction";
import Card from "../Overview/Card";

import { toggleModal } from "../../context/modalSlice";
import { validateTransactionToast } from "./utils/validateTransactions";

const FORM_OPTIONS = ["Job", "Side Job", "Freelancing", "Other"];

export default function DepositForm() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("job");
  const dispatch = useDispatch();
  const mainCard = useSelector(getMainCard);
  const { isPending, addTransactions } = useAddTransaction();

  const submitData = {
    amount: parseFloat(amount),
    description,
    bankAccountId: mainCard._id,
    category,
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationError = validateTransactionToast(
      amount,
      description,
      mainCard
    );
    if (!validationError) {
      addTransactions(submitData);
      dispatch(toggleModal({ modalId: "deposit", open: false }));
    }
  }

  return (
    <div>
      <div className="card-transactions-container">
        <Card />
      </div>
      <form className="form-transactions" onSubmit={e => handleSubmit(e)}>
        <Input
          type="number"
          id="amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <Input
          id="description"
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
            {FORM_OPTIONS.map(value => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="form-btn">
          <button className="btn btn-form" disabled={isPending}>
            Deposit
          </button>
        </div>
      </form>
    </div>
  );
}

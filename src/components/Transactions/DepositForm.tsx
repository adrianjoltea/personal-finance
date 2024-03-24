import React, { useState } from "react";
import Input from "../Ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { getMainCard } from "../../context/userCardsSlice";
import { useAddTransaction } from "./addDeposit";
import Card from "../Overview/Card";
import toast from "react-hot-toast";
import { toggleModal } from "../../context/modalSlice";
import { validateTransaction } from "./validateTransactions";

export default function DepositForm() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("job");
  const dispatch = useDispatch();
  const mainCard = useSelector(getMainCard);
  const { isLoading, addTransactions } = useAddTransaction();

  const submitData = {
    amount: parseFloat(amount),
    description,
    bankAccountId: mainCard._id,
    category,
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationError = validateTransaction(amount, description, mainCard);
    if (validationError) {
      toast.error(validationError, {
        className: "toast",
      });
    }

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
            <option value="Job">Job</option>
            <option value="Side job">Side Job</option>
            <option value="Freelancing">Freelancing</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-btn">
          <button className="btn btn-form" disabled={isLoading}>
            Deposit
          </button>
        </div>
      </form>
    </div>
  );
}

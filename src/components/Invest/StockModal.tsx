import React from "react";
import Input from "../Ui/Input";
import Card from "../Overview/Card";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainCard } from "../../context/userCardsSlice";
import toast from "react-hot-toast";
import { toggleModal } from "../../context/modalSlice";
import { useBuyStock } from "./useAddStock";
import { StockModalInterface } from "./Interface/InvestInterface";

export default function StockModal({
  _id,
  name,
  currentValue,
}: StockModalInterface) {
  const [amount, setAmount] = useState(1);
  const mainCard = useSelector(getMainCard);
  const dispatch = useDispatch();
  const { isAdding, buyStock } = useBuyStock();
  const submitData = {
    _id,
    name,
    boughtPrice: currentValue,
    amount,
    cardId: mainCard._id,
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (amount * currentValue > mainCard.balance) {
      toast.error("Insufficent funds", {
        className: "toast",
      });
      return;
    }

    buyStock(submitData);
    dispatch(toggleModal({ modalId: "stock", open: false }));
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
          onChange={e => setAmount(+e.target.value)}
        />

        <div className="form-stocks">
          <span
            className={
              amount * currentValue > mainCard.balance
                ? "form-error"
                : undefined
            }
          >
            {amount > 0 &&
              `Invest ${(amount * currentValue).toFixed(2)}$ in ${name}`}
          </span>
        </div>

        <div className="form-btn">
          <button className="btn btn-form" disabled={!mainCard._id || isAdding}>
            Invest
          </button>
        </div>
      </form>
    </div>
  );
}

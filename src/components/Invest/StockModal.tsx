import React from "react";
import Input from "../Ui/Input";
import Card from "../Overview/Card";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainCard } from "../../context/userCardsSlice";
import toast from "react-hot-toast";
import { toggleModal } from "../../context/modalSlice";
import { useBuyStock } from "./hooks/useBuyStock";
import { StockModalInterface } from "./Interface/InvestInterface";

export default function StockModal({
  _id,
  name,
  currentValue,
}: StockModalInterface) {
  const [amount, setAmount] = useState("");
  const mainCard = useSelector(getMainCard);
  const dispatch = useDispatch();
  const { isAdding, buyStock } = useBuyStock();
  const submitData = {
    _id,
    name,
    boughtPrice: currentValue,
    amount: +amount,
    cardId: mainCard._id,
  };
  const formatedAmount = +amount;

  console.log(submitData);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formatedAmount * currentValue > mainCard.balance) {
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
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />

        <div className="form-stocks">
          <span
            className={
              formatedAmount * currentValue > mainCard.balance
                ? "form-error"
                : undefined
            }
          >
            {formatedAmount > 0 &&
              `Invest ${(formatedAmount * currentValue).toFixed(
                2
              )}$ in ${name}`}
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

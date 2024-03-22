import React from "react";
import { useStocks } from "./getInvestitions";
import sellStock from "./sellStock";
import toast from "react-hot-toast";

interface BoughtStock {
  amount: number;
  boughtPrice: number;
  i: number;
  stockId: string;
  cardId: string;
  sellPriceId: string;
  name: string;
}

export default function BoughtStockRow({
  amount,
  boughtPrice,
  i,
  stockId,
  cardId,
  sellPriceId,
  name,
}: BoughtStock) {
  const { availableStocks, refetchStocks } = useStocks();

  const stock = availableStocks.find(stock => stock._id === sellPriceId);

  const submitData = {
    amount,
    _id: stockId,
    sellPrice: stock?.currentValue,
    cardId,
  };

  async function handleSellStock() {
    toast.success("Succesfully sold the stock", {
      className: "toast",
    });
    await sellStock(submitData);
    await refetchStocks();
  }

  const profit = stock
    ? amount * stock.currentValue > amount * boughtPrice
    : false;

  return (
    <div className="transaction-table-row" key={i}>
      <p className="transaction-table-row-item">{name}</p>
      <p
        className={`transaction-table-row-item ${
          profit ? "text-green" : "text-red"
        }`}
      >
        {amount}
      </p>
      <p className="transaction-table-row-item">{boughtPrice}</p>
      <p className="transaction-table-row-item">{stock?.currentValue}</p>
      <div className="transaction-table-row-item">
        <button className="btn" onClick={handleSellStock}>
          Sell for {stock ? amount * stock.currentValue : "N/A"}
        </button>
      </div>
    </div>
  );
}

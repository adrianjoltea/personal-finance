import React from "react";
import { useSellStock } from "./useSellStock";
import { useStocks } from "./getInvestitions";

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
  const { availableStocks } = useStocks();
  const { isSelling, sellStock } = useSellStock();
  const stock = availableStocks?.find(stock => stock._id === sellPriceId);

  const submitData = {
    amount,
    _id: stockId,
    sellPrice: stock?.currentValue,
    cardId,
  };

  function handleSellStock() {
    sellStock(submitData);
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
        <button className="btn" onClick={handleSellStock} disabled={isSelling}>
          Sell for {stock ? amount * stock.currentValue : "N/A"}
        </button>
      </div>
    </div>
  );
}

import { useSellStock } from "./hooks/useSellStock";
import { useStocks } from "./hooks/useStocks";
import { BoughtStock } from "./Interface/InvestInterface";

function useFormatedStocks(
  sellPriceId: string,
  amount: number,
  boughtPrice: number
) {
  const { availableStocks } = useStocks();
  const stock = availableStocks?.find(stock => stock._id === sellPriceId);
  const profit = stock
    ? amount * stock.currentValue > amount * boughtPrice
    : false;
  const profitAmount = stock && amount * stock.currentValue;

  return { stock, profit, profitAmount };
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
  const { isSelling, sellStock } = useSellStock();

  const { stock, profit, profitAmount } = useFormatedStocks(
    sellPriceId,
    amount,
    boughtPrice
  );

  const submitData = {
    amount,
    _id: stockId,
    sellPrice: stock?.currentValue,
    cardId,
  };

  function handleSellStock() {
    sellStock(submitData);
  }

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
      <p className="transaction-table-row-item">
        {stock ? profitAmount?.toFixed(2) : "N/A"}
      </p>
      <div className="transaction-table-row-item">
        <button className="btn" onClick={handleSellStock} disabled={isSelling}>
          Sell All
        </button>
      </div>
    </div>
  );
}

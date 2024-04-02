import BoughtStockRow from "./BoughtStockRow";
import { getMainCard } from "../../context/userCardsSlice";
import { useSelector } from "react-redux";
import { useStocks } from "./hooks/useStocks";

export default function BoughtStocks() {
  const { stocks } = useStocks();
  const mainCard = useSelector(getMainCard);
  console.log("ciava");

  return (
    <div className="transaction-table transaction-table-invest">
      <div className="transaction-table-row">
        <div className="transaction-table-row-item">Name</div>
        <div className="transaction-table-row-item">Amount</div>
        <div className="transaction-table-row-item">Bought Price</div>
        <div className="transaction-table-row-item">Sell Price</div>
        <div className="transaction-table-row-item">Sell</div>
      </div>
      {stocks?.length === 0 && (
        <div className="empty-page">Please buy a stock</div>
      )}
      {stocks?.map((data, i) => (
        <BoughtStockRow
          key={i}
          amount={data.amount}
          i={i}
          boughtPrice={data.boughtPrice}
          stockId={data._id}
          cardId={mainCard._id}
          sellPriceId={data.stockId}
          name={data.name}
        />
      ))}
    </div>
  );
}

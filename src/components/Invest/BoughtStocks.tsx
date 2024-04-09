import BoughtStockRow from "./BoughtStockRow";
import { getMainCard } from "../../context/userCardsSlice";
import { useSelector } from "react-redux";
import { useStocks } from "./hooks/useStocks";

const ROW_ITEMS = ["Name", "Amount", "Bought Price", "Sell Price", "Sell"];

export default function BoughtStocks() {
  const { stocks } = useStocks();
  const mainCard = useSelector(getMainCard);

  return (
    <div className="transaction-table transaction-table-invest">
      <div className="transaction-table-row">
        {ROW_ITEMS.map(row => (
          <div key={row} className="transaction-table-row-item">
            {row}
          </div>
        ))}
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

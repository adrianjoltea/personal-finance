import BoughtStockRow from "./BoughtStockRow";
import { getMainCard } from "../../context/userCardsSlice";
import { useSelector } from "react-redux";
import { useStocks } from "./hooks/useStocks";
import { useSearchParams } from "react-router-dom";
import { Stocks } from "../../services/Interfaces/Investitions";
import { sortData } from "../../utils/sortData";
import SortingByOption from "../Ui/SortingByOption";
import { dataStates } from "../../utils/dataStates";

const ROW_ITEMS = ["Name", "Amount", "Bought Price", "Sell Price", "Sell"];
const SORT_OPTIONS = [
  { value: "amount-asc", label: "Sort by amount (A-Z)" },
  { value: "amount-desc", label: "Sort by amount (Z-A)" },
  { value: "name-asc", label: "Sort by name (A-Z)" },
  { value: "name-desc", label: "Sort by name (Z-A)" },
  { value: "boughtPrice-asc", label: "Sort by bought price (A-Z)" },
  { value: "boughtPrice-desc", label: "Sort by bought price (Z-A)" },
];
const EMPTY_DATA_TEXT = "Please buy a stock";

export default function BoughtStocks() {
  const [searchParams] = useSearchParams();
  const { stocks, loading } = useStocks();
  const sortBy = searchParams.get("sortBy") || "amount-asc";
  const [field, direction] = sortBy.split("-") as [keyof Stocks, string];

  const stocksState = dataStates(stocks, loading, EMPTY_DATA_TEXT);
  const sortedData = sortData(stocks, field, direction);
  const mainCard = useSelector(getMainCard);

  return (
    <div className="transaction-table transaction-table-invest">
      <SortingByOption title="Owned stocks" options={SORT_OPTIONS} />

      <div className="transaction-table-row">
        {ROW_ITEMS.map(row => (
          <div key={row} className="transaction-table-row-item">
            {row}
          </div>
        ))}
      </div>
      {stocksState}
      {sortedData?.map((data, i) => (
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

import BoughtStockRow from "./BoughtStockRow";
import { getMainCard } from "../../context/userCardsSlice";
import { useSelector } from "react-redux";
import { useStocks } from "./hooks/useStocks";
import { useSearchParams } from "react-router-dom";
import { Stocks } from "../../services/Interfaces/Investitions";
import { sortData } from "../../utils/sortData";
import SortingByOption from "../Ui/SortingByOption";
import { dataStates } from "../../utils/dataStates";
import { useTranslation } from "react-i18next";
import { InvestProps } from "./Interface/InvestInterface";
import { translateData } from "../../utils/translateData";

const ROW_ITEMS = ["Name", "Amount", "Bought Price", "Sell Price", "Sell"];

const EMPTY_DATA_TEXT = "Please buy a stock";

function useTranslatedText() {
  const { t } = useTranslation();
  const { options, ownedStocks } = t("invest") as unknown as InvestProps;

  const { sortAmount, sortBoughtPrice, sortName } = options;

  const rowTranslated = translateData(ROW_ITEMS, ownedStocks);
  const SORT_OPTIONS = [
    { value: "amount-asc", label: `${sortAmount} (A-Z)` },
    { value: "amount-desc", label: `${sortAmount} (Z-A)` },
    { value: "name-asc", label: `${sortName} (A-Z)` },
    { value: "name-desc", label: `${sortName} (Z-A)` },
    { value: "boughtPrice-asc", label: `${sortBoughtPrice} (A-Z)` },
    { value: "boughtPrice-desc", label: `${sortBoughtPrice} (Z-A)` },
  ];

  return { SORT_OPTIONS, rowTranslated };
}

export default function BoughtStocks() {
  const [searchParams] = useSearchParams();
  const { stocks, loading } = useStocks();
  const sortBy = searchParams.get("sortBy") || "amount-asc";
  const [field, direction] = sortBy.split("-") as [keyof Stocks, string];

  const { SORT_OPTIONS, rowTranslated } = useTranslatedText();

  const stocksState = dataStates(stocks, loading, EMPTY_DATA_TEXT);
  const sortedData = sortData(stocks, field, direction);
  const mainCard = useSelector(getMainCard);

  return (
    <div className="transaction-table transaction-table-invest">
      <SortingByOption title="Owned stocks" options={SORT_OPTIONS} />

      <div className="transaction-table-row">
        {rowTranslated.map(row => (
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

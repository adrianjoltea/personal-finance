import { useTransactions } from "../Transactions/hooks/useTransactions";
import { sortData } from "../../utils/sortData";
import { useSearchParams } from "react-router-dom";
import { transactions } from "../../services/Interfaces/TransactionsInterface";
import SortingByOption from "../Ui/SortingByOption";
import TransactionHistoryRow from "./TransactionHistoryRow";
import { dataStates } from "../../utils/dataStates";
import { useTranslation } from "react-i18next";
import {
  TransactionHistoryProps,
  TransactionOptionProps,
} from "./Interface/OverviewInterface";
import { translateData } from "../../utils/translateData";

function useTranslatedOptions() {
  const { t } = useTranslation();
  const { options } = t("transactions") as unknown as TransactionOptionProps;
  const { sortAmount, sortCategory, sortCreatedAt, sortDescription } = options;

  const SORT_OPTIONS = [
    { value: "amount-asc", label: `${sortAmount} (A-Z)` },
    { value: "amount-desc", label: `${sortAmount} (Z-A)` },
    { value: "createdAt-asc", label: `${sortCreatedAt} (A-Z)` },
    { value: "createdAt-desc", label: `${sortCreatedAt} (Z-A)` },
    { value: "description-asc", label: `${sortDescription} (A-Z)` },
    { value: "description-desc", label: `${sortDescription} (Z-A)` },
    { value: "category-asc", label: `${sortCategory} (A-Z)` },
    { value: "category-desc", label: `${sortCategory} (Z-A)` },
  ];

  return SORT_OPTIONS;
}

const ROW_ITEMS = ["Amount", "Created At", "Description", "Category"];
const EMPTY_DATA_TEXT = "Please make a transaction";

export default function TransactionHistory() {
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();
  const { transactions, loading } = useTransactions();
  const sortBy = searchParams.get("sortBy") || "amount-asc";
  const [field, direction] = sortBy.split("-") as [keyof transactions, string];
  const SORT_OPTIONS = useTranslatedOptions();

  const transactionState = dataStates(transactions, loading, EMPTY_DATA_TEXT);
  const sortedData = sortData(transactions, field, direction);
  const { transactionHistory } = t(
    "transactions"
  ) as unknown as TransactionHistoryProps;

  const rowTranslated = translateData(ROW_ITEMS, transactionHistory);

  return (
    <div className="transaction-table-overview transaction-table">
      <SortingByOption
        title="Transaction history"
        options={SORT_OPTIONS}
        buttons={true}
      />

      <div className="transaction-table-row">
        {rowTranslated.map(row => (
          <div className="transaction-table-row-item" key={row}>
            {row}
          </div>
        ))}
      </div>
      {transactionState}
      {sortedData?.map(data => (
        <TransactionHistoryRow
          amount={data.amount}
          category={data.category}
          description={data.description}
          createdAt={data.createdAt}
        />
      ))}
    </div>
  );
}

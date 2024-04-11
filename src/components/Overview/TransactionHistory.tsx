import { useTransactions } from "../Transactions/hooks/useTransactions";
import { sortData } from "../../utils/sortData";
import { useSearchParams } from "react-router-dom";
import { transactions } from "../../services/Interfaces/TransactionsInterface";
import SortingByOption from "../Ui/SortingByOption";
import TransactionHistoryRow from "./TransactionHistoryRow";
import { dataStates } from "../../utils/dataStates";

const SORT_OPTIONS = [
  { value: "amount-asc", label: "Sort by amount (A-Z)" },
  { value: "amount-desc", label: "Sort by amount (Z-A)" },
  { value: "createdAt-asc", label: "Sort by created At (A-Z)" },
  { value: "createdAt-desc", label: "Sort by created At (Z-A)" },
  { value: "description-asc", label: "Sort by description (A-Z)" },
  { value: "description-desc", label: "Sort by description (Z-A)" },
  { value: "category-asc", label: "Sort by category (A-Z)" },
  { value: "category-desc", label: "Sort by category (Z-A)" },
];

const ROW_ITEMS = ["Amount", "Created At", "Description", "Category"];
const EMPTY_DATA_TEXT = "Please make a transaction";

export default function TransactionHistory() {
  const [searchParams] = useSearchParams();
  const { transactions, loading } = useTransactions();
  const sortBy = searchParams.get("sortBy") || "amount-asc";
  const [field, direction] = sortBy.split("-") as [keyof transactions, string];

  const transactionState = dataStates(transactions, loading, EMPTY_DATA_TEXT);
  const sortedData = sortData(transactions, field, direction);

  return (
    <div className="transaction-table-overview transaction-table">
      <SortingByOption title="Transaction history" options={SORT_OPTIONS} />

      <div className="transaction-table-row">
        {ROW_ITEMS.map(row => (
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

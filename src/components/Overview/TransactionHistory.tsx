import { formatDate } from "../../utils/formatDate";
import { useThreshold } from "../../hooks/useResponsive";
import { useTransactions } from "../Transactions/hooks/useTransactions";
import { sortData } from "../../utils/sortData";
import { useSearchParams } from "react-router-dom";
import { transactions } from "../../services/Interfaces/TransactionsInterface";
import SortingByOption from "../Ui/SortingByOption";

const THRESHOLD_WIDTH = 400;
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

export default function TransactionHistory() {
  const [searchParams] = useSearchParams();
  const isThresholdMet = useThreshold(THRESHOLD_WIDTH);
  const { transactions, loading } = useTransactions();
  const sortBy = searchParams.get("sortBy") || "amount-asc";
  const [field, direction] = sortBy.split("-") as [keyof transactions, string];

  const sortedData = sortData(transactions, field, direction);

  return (
    <div className="transaction-table-overview transaction-table">
      <SortingByOption title="Transaction history" options={SORT_OPTIONS} />

      <div className="transaction-table-row">
        <div className="transaction-table-row-item">Amount</div>
        <div className="transaction-table-row-item">Created At</div>
        <div className="transaction-table-row-item">Description</div>
        {isThresholdMet && (
          <div className="transaction-table-row-item">Category</div>
        )}
      </div>
      {loading && <div className="empty-page">Loading...</div>}
      {!loading && sortedData?.length === 0 && (
        <div className="empty-page">Please make a transaction</div>
      )}

      {sortedData?.map((data, i) => (
        <div className="transaction-table-row" key={i}>
          {/* {Temporary currency} */}
          <p
            className={`transaction-table-row-item ${
              data.amount >= 0 ? "text-green" : "text-red"
            }`}
          >
            {data.amount} $
          </p>
          <p className="transaction-table-row-item">
            {formatDate(data.createdAt)}
          </p>
          <p className="transaction-table-row-item">{data.description}</p>
          {isThresholdMet && (
            <p className="transaction-table-row-item">{data.category}</p>
          )}
        </div>
      ))}
    </div>
  );
}

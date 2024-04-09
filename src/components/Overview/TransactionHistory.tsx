import { useState } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { formatDate } from "../../utils/formatDate";

import { useThreshold } from "../../hooks/useResponsive";
import { useTransactions } from "../Transactions/hooks/useTransactions";
import { sortData } from "../../utils/sortData";

const THRESHOLD_WIDTH = 400;

export default function TransactionHistory() {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const isThresholdMet = useThreshold(THRESHOLD_WIDTH);
  const { transactions, loading } = useTransactions();

  const sortedData = sortData(transactions, "createdAt", sortOrder);

  function toggleSortOrder() {
    setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
  }
  return (
    <div className="transaction-table-overview transaction-table">
      <div className="transaction-table-row">
        <div
          className="transaction-table-row-item transaction-table-title"
          onClick={toggleSortOrder}
        >
          {sortOrder === "asc" ? <IoIosArrowUp /> : <IoIosArrowDown />}
          Amount
        </div>
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

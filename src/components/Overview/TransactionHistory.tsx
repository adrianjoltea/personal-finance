import { useState } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { formatDate } from "../../hooks/useFormatDate";

import { useThreshold } from "../../hooks/useResponsive";
import { useTransactions } from "../Transactions/getTransactions";

export default function TransactionHistory() {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const thresholdWidth = 400;
  const isThresholdMet = useThreshold(thresholdWidth);
  const { transactions, loading } = useTransactions();
  const sortedData = [...(transactions ?? [])].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.amount - b.amount;
    } else {
      return b.amount - a.amount;
    }
  });

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
      {!loading && sortedData.length === 0 && (
        <div className="empty-page">Please make a transcation</div>
      )}
      {sortedData.map((data, i) => (
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

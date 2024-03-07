import { useEffect, useState } from "react";
import getTransactions from "../Transactions/getTransactions";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { formatDate } from "../../hooks/useFormatDate";
interface Transaction {
  amount: number;
  description: string;
  createdAt: Date;
}

export default function TransactionHistory() {
  const [transactions, setTransactions] = useState<Transaction[] | undefined>(
    undefined
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const transactionsData = await getTransactions();
        setTransactions(transactionsData);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  if (transactions === undefined) return <>loading</>;

  const sortedData = [...transactions].sort(
    (a: Transaction, b: Transaction) => {
      if (sortOrder === "asc") {
        return a.amount - b.amount;
      } else {
        return b.amount - a.amount;
      }
    }
  );

  function toggleSortOrder() {
    setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
  }

  return (
    <div className="transaction-table">
      <div className="transaction-table-row">
        <div
          className="transaction-table-row-item transaction-table-title"
          onClick={toggleSortOrder}
        >
          {sortOrder === "asc" ? <IoIosArrowUp /> : <IoIosArrowDown />}
          Amount
        </div>
        <div className="transaction-table-row-item">Created At</div>
        <div className="transaction-table-row-item">Description </div>
      </div>
      {sortedData.map((data: Transaction, i) => (
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
        </div>
      ))}
    </div>
  );
}

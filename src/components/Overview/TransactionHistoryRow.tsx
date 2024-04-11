import { transactions } from "../../services/Interfaces/TransactionsInterface";
import { formatDate } from "../../utils/formatDate";

export default function TransactionHistoryRow({
  amount,
  createdAt,
  description,
  category,
}: transactions) {
  return (
    <div className="transaction-table-row" key={amount}>
      <p
        className={`transaction-table-row-item ${
          amount >= 0 ? "text-green" : "text-red"
        }`}
      >
        {amount} $
      </p>
      <p className="transaction-table-row-item">{formatDate(createdAt)}</p>
      <p className="transaction-table-row-item">{description}</p>

      <p className="transaction-table-row-item">{category}</p>
    </div>
  );
}

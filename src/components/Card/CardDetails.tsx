import { BiTrash } from "react-icons/bi";
import { formatCurrency } from "../../utils/formatCurrency";
import { CardDetailsProps } from "./Interface/CardInterface";
import { useDeleteCard } from "./hooks/useDeleteCard";

export default function CardDetails({
  balance,
  currency,
  name,
  _id,
  handleClick,
  hasEffects,
}: CardDetailsProps) {
  const { isDeleting, deleteOneCard } = useDeleteCard();
  const handleDelete = async () => {
    if (!_id) {
      return;
    }

    deleteOneCard({ _id });
  };

  return (
    <div
      className={`card ${hasEffects ? "card-hover" : ""}`}
      onClick={() => handleClick?.({ name, currency, balance, _id })}
    >
      <div className="card-name-placeholder">
        <div className="card-name">{name}</div>
      </div>
      <div className="card-balance">
        <span>Balance </span>
        <span>
          {formatCurrency(balance)}{" "}
          <button
            onClick={handleDelete}
            className="delete-btn"
            disabled={isDeleting}
          >
            <BiTrash />
          </button>
        </span>
      </div>
    </div>
  );
}

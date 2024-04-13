import { BiTrash } from "react-icons/bi";
import { formatCurrency } from "../../utils/formatCurrency";
import { FaCcMastercard } from "react-icons/fa";
import { CardDetailsProps } from "./Interface/CardInterface";
import { useDeleteCard } from "./hooks/useDeleteCard";

export default function CardDetails({
  balance,
  currency,
  name,
  _id,
  handleClick,
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
      className="card"
      onClick={() => handleClick?.({ name, currency, balance, _id })}
    >
      <div className="card-number"></div>
      <div className="card-balance">
        <span>
          Balance{" "}
          <button
            onClick={handleDelete}
            className="delete-btn"
            disabled={isDeleting}
          >
            <BiTrash />
          </button>
        </span>{" "}
        {formatCurrency(balance)}
      </div>

      <div className="card-name-placeholder">
        <div className="card-name">
          <span>Name</span> {name}
        </div>
        <div>
          <FaCcMastercard className="card-placeholder" />
        </div>
      </div>
    </div>
  );
}

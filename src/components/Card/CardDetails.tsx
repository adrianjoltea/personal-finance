import { BiTrash } from "react-icons/bi";
import { formatCurrency } from "../../hooks/useFormatCurrency";
import { FaCcMastercard } from "react-icons/fa";
import { deleteCard } from "../../services/apiBank";
import { CardDetailsProps } from "./Interface/CardInterface";

export default function CardDetails({
  balance,
  currency,
  name,
  _id,
  handleClick,
}: CardDetailsProps) {
  const handleDelete = async () => {
    if (!_id) {
      return;
    }

    await deleteCard({ _id });
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
          <button onClick={handleDelete} className="delete-btn">
            <BiTrash />
          </button>
        </span>{" "}
        {formatCurrency(balance)}
      </div>

      <div className="card-name-placeholder">
        <div className="card-name">
          <span>Username</span> {name}
        </div>
        <div>
          <FaCcMastercard className="card-placeholder" />
        </div>
      </div>
    </div>
  );
}

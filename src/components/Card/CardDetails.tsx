import { BiTrash } from "react-icons/bi";
import { formatCurrency } from "../../hooks/useFormatCurrency";
import { FaCcMastercard } from "react-icons/fa";
import { deleteCard } from "../../services/apiBank";
interface ClickedCard {
  name: string;
  currency: string;
  balance: number;
  _id: string | undefined;
}

interface CardDetailsProps {
  balance: number;
  currency: string;
  name: string;
  _id: string | undefined;
  handleClick?: (clickedCard: ClickedCard) => void;
}

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

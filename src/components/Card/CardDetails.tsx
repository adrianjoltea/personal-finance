import { formatCurrency } from "../../hooks/useFormatCurrency";
import { FaCcMastercard } from "react-icons/fa";
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
  return (
    <div
      className="card"
      onClick={() => handleClick?.({ name, currency, balance, _id })}
    >
      <div className="card-number"></div>
      <div className="card-balance">
        <span>Balance</span> {formatCurrency(balance)}
      </div>
      <div>{currency}</div>
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

import React from "react";
import { formatCurrency } from "../../hooks/useFormatCurrency";

interface ClickedCard {
  name: string;
  currency: string;
  balance: number;
  id: string | undefined;
}

interface CardDetailsProps {
  balance: number;
  currency: string;
  name: string;
  id: string | undefined;
  handleClick?: (clickedCard: ClickedCard) => void;
}

export default function CardDetails({
  balance,
  currency,
  name,
  id,
  handleClick,
}: CardDetailsProps) {
  // const handleCardClick = () => {
  //   const clickedCard = {
  //     nameUser,
  //     currency,
  //     balance,
  //   };
  //   if (handleClick) {
  //     handleClick(clickedCard);
  //   }
  // };
  return (
    <div
      className="card"
      onClick={() => handleClick?.({ name, currency, balance, id })}
    >
      <div className="card-number"></div>
      <div className="card-balance">{formatCurrency(balance)}</div>
      <div>{currency}</div>
      <div className="card-name">{name}</div>
    </div>
  );
}

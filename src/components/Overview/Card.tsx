import { useSelector } from "react-redux";

import CardDetails from "../Card/CardDetails";
import { getMainCard } from "../../context/userCardsSlice";

interface MainCardProps {
  _id?: string;
  name: string;
  balance: number;
  currency: string;
}
export default function Card() {
  const mainCard: MainCardProps = useSelector(getMainCard);
  console.log(mainCard);

  return (
    <div className="main-card-container">
      <CardDetails
        name={mainCard?.name}
        balance={mainCard?.balance}
        currency={mainCard?.currency}
        _id={mainCard?._id}
      />
    </div>
  );
}

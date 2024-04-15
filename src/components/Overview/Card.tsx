import { useSelector } from "react-redux";

import CardDetails from "../Card/CardDetails";
import { getMainCard } from "../../context/userCardsSlice";
import { MainCardProps } from "./Interface/OverviewInterface";
import EmptyPage from "../Ui/EmptyPage";

export default function Card({ hasEffects }: { hasEffects?: boolean }) {
  const mainCard: MainCardProps = useSelector(getMainCard);
  return (
    <div className="main-card-container">
      {mainCard.name === undefined ? (
        <EmptyPage text="Please add a card" />
      ) : (
        <CardDetails
          name={mainCard?.name}
          balance={mainCard?.balance}
          currency={mainCard?.currency}
          _id={mainCard?._id}
          hasEffects={hasEffects}
        />
      )}
    </div>
  );
}

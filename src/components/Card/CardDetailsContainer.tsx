import CardDetails from "./CardDetails";
import ScrollContainer from "react-indiana-drag-scroll";
import { useDispatch } from "react-redux";
import { setMainCard } from "../../context/userCardsSlice";
import { debounce } from "lodash";
import { useCardsUsers } from "../Bank/getCardsUser";

interface CardInput {
  _id?: string;
  name: string;
  balance: number;
  currency: string;
}

export default function CardDetailsContainer() {
  const dispatch = useDispatch();
  const { cards } = useCardsUsers();

  function handleCardClick(clickedCard: object) {
    const debounceLocalStorageWrite = debounce(() => {
      localStorage.setItem("mainCard", JSON.stringify(clickedCard));
    }, 1500);
    dispatch(setMainCard(clickedCard));
    debounceLocalStorageWrite();
  }

  return (
    <>
      {cards?.length === 0 && (
        <div className="empty-page">Please add a card</div>
      )}
      <ScrollContainer>
        {cards?.map((card: CardInput, index: number) => (
          <CardDetails
            _id={card._id}
            key={index}
            name={card.name}
            balance={card.balance}
            currency={card.currency}
            handleClick={handleCardClick}
          />
        ))}
      </ScrollContainer>
    </>
  );
}

import CardDetails from "./CardDetails";

import ScrollContainer from "react-indiana-drag-scroll";
import { useDispatch, useSelector } from "react-redux";

import { getCard, setMainCard } from "../../context/userCardsSlice";
import { debounce } from "lodash";

interface CardInput {
  id?: string;
  name: string;
  balance: number;
  currency: string;
}

export default function CardDetailsContainer() {
  // const [mainCard, setMainCard] = useState(null);
  const dispatch = useDispatch();

  const cardsDB = useSelector(getCard);
  console.log(cardsDB);
  // const dataArray: {
  //   nameUser: string;
  //   balance: number;
  //   currency: string;
  // }[] = [];

  function handleCardClick(clickedCard: object) {
    console.log("ciava", clickedCard);

    const debounceLocalStorageWrite = debounce(() => {
      localStorage.setItem("mainCard", JSON.stringify(clickedCard));
    }, 1500);
    dispatch(setMainCard(clickedCard));
    debounceLocalStorageWrite();
  }

  return (
    <ScrollContainer>
      {cardsDB.map((card: CardInput, index: number) => (
        <CardDetails
          id={card.id}
          key={index}
          name={card.name}
          balance={card.balance}
          currency={card.currency}
          handleClick={handleCardClick}
        />
      ))}
    </ScrollContainer>
  );
}

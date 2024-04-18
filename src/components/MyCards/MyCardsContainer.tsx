import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useCardsUsers } from "../Card/hooks/useCardsUser";
import { debounce } from "lodash";
import { setMainCard } from "../../context/userCardsSlice";
import CardDetails from "../Card/CardDetails";
import { CardInput } from "../Card/Interface/CardInterface";
import MyCardsSkeleton from "./MyCardsSkeleton";
import { CardsData } from "../../services/Interfaces/BankInterface";
import { useThreshold } from "../../hooks/useResponsive";

let CARDS_PER_PAGE = 5;
const THRESHOLD_WIDTH = 550;

function usePaginate({ cards }: { cards: CardsData[] | undefined }) {
  const [currentPage, setCurrentPage] = useState(1);
  const isThresholdMet = useThreshold(THRESHOLD_WIDTH);

  console.log(isThresholdMet);

  if (!isThresholdMet) {
    CARDS_PER_PAGE = 3;
    if (currentPage === 1) CARDS_PER_PAGE -= 1;
  } else {
    CARDS_PER_PAGE = 5;
  }
  const indexOfLastCard = currentPage * CARDS_PER_PAGE;
  const indexOfFirstCard = indexOfLastCard - CARDS_PER_PAGE;
  const currentCards = cards?.slice(indexOfFirstCard, indexOfLastCard);
  const pages = cards
    ? Math.ceil(
        cards.length /
          (currentPage === 1 ? (CARDS_PER_PAGE += 1) : CARDS_PER_PAGE)
      )
    : 0;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return { currentCards, paginate, pages, currentPage };
}

const PaginateButtons = ({
  pages,
  paginate,
}: {
  pages: number;
  paginate: (pageNumber: number) => void;
}) => {
  return (
    <div className="my-cards-pagination">
      {Array.from({ length: pages }, (_, index) => (
        <button className="btn" key={index} onClick={() => paginate(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

function MyCardsContainer() {
  const dispatch = useDispatch();
  const { cards } = useCardsUsers();

  const { currentCards, paginate, pages, currentPage } = usePaginate({ cards });
  function handleCardClick(clickedCard: object) {
    const debounceLocalStorageWrite = debounce(() => {
      localStorage.setItem("mainCard", JSON.stringify(clickedCard));
    }, 1500);
    dispatch(setMainCard(clickedCard));
    debounceLocalStorageWrite();
  }

  return (
    <div className="my-cards-container">
      <div className="my-cards-container-cards">
        {currentPage === 1 && <MyCardsSkeleton />}
        {currentCards?.map((card: CardInput, index: number) => (
          <CardDetails
            hasEffects={true}
            hasDelete={true}
            _id={card._id}
            key={index}
            name={card.name}
            balance={card.balance}
            currency={card.currency}
            handleClick={handleCardClick}
            firstColor={card.firstColor}
            secondColor={card.secondColor}
          />
        ))}
      </div>
      <PaginateButtons pages={pages} paginate={paginate} />
    </div>
  );
}

export default MyCardsContainer;

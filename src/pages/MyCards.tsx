import MyCardsContainer from "../components/MyCards/MyCardsContainer";
import MyCardsTitle from "../components/MyCards/MyCardsTitle";

export default function MyCards() {
  return (
    <div className="main-page-container">
      <div className="main-page">
        <MyCardsTitle />
        <MyCardsContainer />
      </div>
    </div>
  );
}

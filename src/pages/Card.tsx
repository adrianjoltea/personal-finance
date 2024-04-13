import CardDetailsContainer from "../components/Card/CardDetailsContainer";

import TransactionHistory from "../components/Overview/TransactionHistory";
import CardOperations from "../components/Card/CardOperations";

export default function Card() {
  return (
    <div className="main-page-container">
      <div className="main-page">
        <CardDetailsContainer />
        <CardOperations />
        <TransactionHistory />
      </div>
    </div>
  );
}

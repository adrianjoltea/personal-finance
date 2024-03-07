import { useSelector } from "react-redux";
import CardDetailsContainer from "../components/Card/CardDetailsContainer";
import { getUser } from "../context/userSlice";
import TransactionHistory from "../components/Overview/TransactionHistory";
import CardOperations from "../components/Card/CardOperations";

export default function Card() {
  const user = useSelector(getUser);

  const userID = user.id;
  console.log(userID);
  return (
    <div className="main-page">
      <CardDetailsContainer />
      <CardOperations />
      <TransactionHistory />
    </div>
  );
}

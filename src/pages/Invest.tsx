import BoughtStocks from "../components/Invest/BoughtStocks";
import InvesitionsContainer from "../components/Invest/StocksContainer";
import Card from "../components/Overview/Card";

export default function Invest() {
  return (
    <div className="main-page">
      <Card />
      <BoughtStocks />
      <InvesitionsContainer />
    </div>
  );
}

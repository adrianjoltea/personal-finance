import Card from "../components/Overview/Card";
import CardMainTransactions from "../components/Overview/CardMainTransactions";
import CategoriesPie from "../components/Overview/CategoriesPie";
import TransactionChart from "../components/Overview/TransactionChart";
import TransactionChartButtons from "../components/Overview/TransactionChartButtons";

export default function Overview() {
  return (
    <div className="main-page">
      <CardMainTransactions />
      <TransactionChart />
      <Card />
      <TransactionChartButtons />
      <CategoriesPie />
    </div>
  );
}

import Card from "../components/Overview/Card";
import TransactionChart from "../components/Overview/TransactionChart";
import TransactionChartButtons from "../components/Overview/TransactionChartButtons";

export default function Overview() {
  return (
    <div className="main-page">
      <TransactionChart />
      <Card />
      <TransactionChartButtons />
    </div>
  );
}

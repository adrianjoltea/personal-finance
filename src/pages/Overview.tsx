import Card from "../components/Overview/Card";
import CardMainTransactions from "../components/Overview/CardMainTransactions";
import CategoriesPie from "../components/Overview/CategoriesPie";
import TransactionChart from "../components/Overview/TransactionChart";
import TransactionChartButtons from "../components/Overview/TransactionChartButtons";
import { useThreshold } from "../hooks/useResponsive";

export default function Overview() {
  const thresholdWidth = 900;
  const isThresholdMet = useThreshold(thresholdWidth);
  return (
    <div className="main-page">
      {isThresholdMet ? (
        <>
          <Card />
          <CategoriesPie />
        </>
      ) : (
        <div className="main-page-mobile">
          <Card />
          <CategoriesPie />
        </div>
      )}

      <CardMainTransactions />
      <TransactionChartButtons />
      <TransactionChart />
    </div>
  );
}

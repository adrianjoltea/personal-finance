import Card from "../components/Overview/Card";
import CardMainTransactions from "../components/Overview/CardMainTransactions";
import CategoriesPie from "../components/Overview/CategoriesPie";

import TransactionChart from "../components/Overview/TransactionChart";
import TransactionChartButtons from "../components/Overview/TransactionChartButtons";
import { useTransactions } from "../components/Transactions/getTransactions";

import { useThreshold } from "../hooks/useResponsive";

export default function Overview() {
  const thresholdWidth = 900;
  const isThresholdMet = useThreshold(thresholdWidth);
  const { transactions } = useTransactions();

  return (
    <div className="main-page">
      {transactions?.length === 0 ? (
        <div className="empty-page">
          <h3>Please make a transaction in order to see the main page</h3>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

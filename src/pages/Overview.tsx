import Card from "../components/Overview/Card";
import CardMainTransactions from "../components/Overview/CardMainTransactions";
import CategoriesPie from "../components/Overview/CategoriesPie";

import TransactionChart from "../components/Overview/TransactionChart";
import TransactionChartButtons from "../components/Overview/TransactionChartButtons";
import { useTransactions } from "../components/Transactions/hooks/useTransactions";

import { useThreshold } from "../hooks/useResponsive";

const THRESHOLD_WIDTH = 1400;

export default function Overview() {
  const isThresholdMet = useThreshold(THRESHOLD_WIDTH);
  const { transactions } = useTransactions();

  return (
    <div className="main-page">
      {transactions?.length === 0 ? (
        <div className="empty-page">
          <h3>Please make a transaction in order to see the main page</h3>
        </div>
      ) : (
        <>
          {/* {isThresholdMet ? (
            <>
              <Card />
              <CategoriesPie />
            </>
          ) : (
            <div className="main-page-mobile">
              <Card />
              <CategoriesPie />
            </div>
          )} */}
          <div className="overview-container">
            <div className="overview-container-flex">
              <CategoriesPie />
              {isThresholdMet ? <CardMainTransactions /> : ""}
              <Card />
            </div>
            {isThresholdMet ? "" : <CardMainTransactions />}
          </div>
          <TransactionChartButtons />
          <TransactionChart />
        </>
      )}
    </div>
  );
}

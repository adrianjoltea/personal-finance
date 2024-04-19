import { useTranslation } from "react-i18next";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";
import { useCalculateExpense } from "./hooks/useCalculateExpense";
import { MainTransactions } from "./Interface/OverviewInterface";

export default function BiggestIncome() {
  const biggestIncomeTransaction = useCalculateExpense(true);
  const { t } = useTranslation();

  const { mainTransactions } = t("overview") as unknown as MainTransactions;
  const { biggestIncome, createdAt, description } = mainTransactions;

  return (
    <div className="transactions-overview transactions-overview-blue">
      <h4>{biggestIncome}</h4>
      {biggestIncomeTransaction ? (
        <div>
          <span>{formatCurrency(biggestIncomeTransaction.amount)}$</span>
          <p>
            {createdAt}: {formatDate(biggestIncomeTransaction.createdAt)}
          </p>
          <p>
            {description}: {biggestIncomeTransaction.description}
          </p>
        </div>
      ) : (
        <span>No income data available</span>
      )}
    </div>
  );
}

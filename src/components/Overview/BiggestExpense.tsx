import { useTranslation } from "react-i18next";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";
import { useCalculateExpense } from "./hooks/useCalculateExpense";
import { MainTransactions } from "./Interface/OverviewInterface";

export default function BiggestExpense() {
  const biggestExpenseTransaction = useCalculateExpense(false);
  const { t } = useTranslation();

  const { mainTransactions } = t("overview") as unknown as MainTransactions;
  const { biggestExpense, createdAt, description } = mainTransactions;
  return (
    <div className="transactions-overview transactions-overview-red">
      <h4>{biggestExpense}</h4>
      {biggestExpenseTransaction ? (
        <div>
          <span>{formatCurrency(biggestExpenseTransaction.amount)}$</span>
          <p>
            {createdAt}: {formatDate(biggestExpenseTransaction.createdAt)}
          </p>
          <p>
            {description}: {biggestExpenseTransaction.description}
          </p>
        </div>
      ) : (
        <span>No income data available</span>
      )}
    </div>
  );
}

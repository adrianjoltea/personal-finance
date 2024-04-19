import { useTranslation } from "react-i18next";
import { useTotalExpensesIncomes } from "./hooks/useTotalExpensesIncomes";
import { MainTransactions } from "./Interface/OverviewInterface";

export default function TotalIncomes() {
  const totalIncome = useTotalExpensesIncomes(true);
  const { t } = useTranslation();

  const { mainTransactions } = t("overview") as unknown as MainTransactions;
  const { totalIncomes } = mainTransactions;
  return (
    <div className="transactions-overview transactions-overview-yellow">
      {totalIncomes}: {totalIncome}
    </div>
  );
}

import { useTranslation } from "react-i18next";
import { useTotalExpensesIncomes } from "./hooks/useTotalExpensesIncomes";
import { MainTransactions } from "./Interface/OverviewInterface";

export default function TotalExpenses() {
  const totalExpense = useTotalExpensesIncomes(false);
  const { t } = useTranslation();

  const { mainTransactions } = t("overview") as unknown as MainTransactions;
  const { totalExpenses } = mainTransactions;
  return (
    <div className="transactions-overview transactions-overview-green">
      {totalExpenses}: {totalExpense}
    </div>
  );
}

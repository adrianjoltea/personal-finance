import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { TransactionChartProps } from "./Interface/OverviewInterface";

export default function TransactionChartButtons() {
  const [, setSearchParams] = useSearchParams();
  const setDaysParam = (days: number) => {
    setSearchParams({ days: days.toString() });
  };
  const { t } = useTranslation();

  const { transactionChart } = t(
    "overview"
  ) as unknown as TransactionChartProps;
  const { days, last } = transactionChart;

  const buttonConfigs = [
    {
      days: 7,
      label: last + " 7 " + days,
    },
    {
      days: 30,
      label: last + " 30 " + days,
    },
    {
      days: 90,
      label: last + " 90 " + days,
    },
  ];

  return (
    <div className="transaction-btns">
      {buttonConfigs.map((config, index) => (
        <button
          key={index}
          className="btn btn-transactions"
          onClick={() => setDaysParam(config.days)}
        >
          {config.label}
        </button>
      ))}
    </div>
  );
}

import { useSearchParams } from "react-router-dom";

export default function TransactionChartButtons() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const setDaysParam = (days: number) => {
    setSearchParams({ days: days.toString() });
  };

  return (
    <div className="transaction-btns">
      <button className="btn btn-transactions" onClick={() => setDaysParam(7)}>
        Last 7 days
      </button>
      <button className="btn btn-transactions" onClick={() => setDaysParam(30)}>
        Last 30 days
      </button>
      <button className="btn btn-transactions" onClick={() => setDaysParam(90)}>
        Last 90 days
      </button>
    </div>
  );
}

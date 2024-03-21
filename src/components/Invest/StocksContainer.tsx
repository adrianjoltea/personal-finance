import AvailableStocks from "./AvailableStocks";
import { useStocks } from "./getInvestitions";

export default function InvesitionsContainer() {
  const { stocks, availableStocks } = useStocks();
  console.log(stocks, availableStocks);
  return (
    <div className="stocks-container">
      {availableStocks.map(stock => (
        <AvailableStocks
          key={stock.name}
          currentValue={stock.currentValue}
          previousValue={stock.previousValue}
          changePercent={stock.changePercent}
          name={stock.name}
          _id={stock._id}
        />
      ))}
    </div>
  );
}

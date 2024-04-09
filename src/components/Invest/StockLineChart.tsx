import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { useThreshold } from "../../hooks/useResponsive";
import { StockData, StockLineChartProps } from "./Interface/InvestInterface";

const DATA_AMOUNT = -30;
const THRESHOLD_WIDTH = 1800;
const STROKE_COLOR = "#8884d8";

function lastValues(data: StockData) {
  const values = data.previousValue.slice(DATA_AMOUNT);

  return values.map((value, index) => ({
    previousValue: value,
    index: index + 1,
  }));
}

export default function StockLineChart({ data }: StockLineChartProps) {
  const isThresholdMet = useThreshold(THRESHOLD_WIDTH);
  const chartData = lastValues(data);

  return (
    <div className="stock-line-chart">
      <ResponsiveContainer
        width={isThresholdMet ? 350 : "100%"}
        height={isThresholdMet ? 200 : "100%"}
      >
        <LineChart data={chartData}>
          <XAxis dataKey="index" />
          <Tooltip />
          <Line type="monotone" dataKey="previousValue" stroke={STROKE_COLOR} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

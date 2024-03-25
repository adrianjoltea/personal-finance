import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { useThreshold } from "../../hooks/useResponsive";
import { StockLineChartProps } from "./Interface/InvestInterface";

export default function StockLineChart({ data }: StockLineChartProps) {
  const last30Values = data.previousValue.slice(-30);

  const chartData = last30Values.map((value, index) => ({
    previousValue: value,
    index: index + 1,
  }));
  const thresholdWidth = 1800;
  const isThresholdMet = useThreshold(thresholdWidth);

  return (
    <div className="stock-line-chart">
      <ResponsiveContainer
        width={isThresholdMet ? 350 : "100%"}
        height={isThresholdMet ? 200 : "100%"}
      >
        <LineChart data={chartData}>
          <XAxis dataKey="index" />
          <Tooltip />
          <Line type="monotone" dataKey="previousValue" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface StockData {
  previousValue: number[];
}

interface StockLineChartProps {
  data: StockData;
}

export default function StockLineChart({ data }: StockLineChartProps) {
  const last30Values = data.previousValue.slice(-30);

  const chartData = last30Values.map((value, index) => ({
    previousValue: value,
    index: index + 1,
  }));

  return (
    <div className="stock-line-chart">
      <ResponsiveContainer
        width="100%"
        height="100%"
        minWidth={400}
        minHeight={200}
      >
        <LineChart data={chartData}>
          <XAxis dataKey="index" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="previousValue" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

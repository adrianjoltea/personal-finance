import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Brush,
  Area,
  AreaChart,
  Legend,
} from "recharts";
import React, { useMemo } from "react";
import { formatDate } from "../../hooks/useFormatDate";
import { useSelector } from "react-redux";
import { getDark } from "../../context/darkModeSlice";
import { useThreshold } from "../../hooks/useResponsive";
import { usePastTranscations } from "../Transactions/PastTransactions";

export default function TransactionChart() {
  const thresholdWidth = 900;
  const isThresholdMet = useThreshold(thresholdWidth);

  const { isLoading, pastTransaction } = usePastTranscations();

  const isDarkMode = useSelector(getDark);

  const chartData = pastTransaction?.map(transaction => ({
    day: formatDate(transaction.day),
    income: transaction.income,
    expenses: transaction.expense,
  }));

  const chartBrush = pastTransaction?.length;

  const colors = useMemo(() => {
    return isDarkMode
      ? {
          income: { stroke: "#4f46e5", fill: "#4f46e5" },
          expenses: { stroke: "#22c55e", fill: "#22c55e" },
          text: "#e5e7eb",
          background: "#18212f",
        }
      : {
          income: { stroke: "#4f46e5", fill: "#adbdfc" },
          expenses: { stroke: "#16a34a", fill: "#aefac8" },
          text: "#374151",
          background: "#fff",
        };
  }, [isDarkMode]);

  return (
    <div className="transaction-chart">
      {isLoading ? (
        <div className="empty-page">Loading...</div>
      ) : (
        <ResponsiveContainer
          width="100%"
          height={isThresholdMet ? "100%" : 300}
        >
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis
              dataKey="day"
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <YAxis
              unit="$"
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: colors.background,
                color: colors.text,
              }}
            />
            <Legend />
            <Area
              dataKey="income"
              stroke={colors.income.stroke}
              fill={colors.income.fill}
              name="income"
              type="monotone"
              unit="$"
            />
            <Area
              dataKey="expenses"
              stroke={colors.expenses.stroke}
              fill={colors.expenses.fill}
              type="monotone"
              name="expenses"
              unit="$"
            />
            <Brush
              dataKey={chartBrush}
              stroke={colors.income.stroke}
              fill={colors.income.fill}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

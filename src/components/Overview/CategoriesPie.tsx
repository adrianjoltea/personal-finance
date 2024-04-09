import { processTransactions } from "./utils/proccessTransactions";
import { useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { getDark } from "../../context/darkModeSlice";
import { ChartOptions } from "./Interface/OverviewInterface";
import { useTransactions } from "../Transactions/hooks/useTransactions";

const DARK_COLORS = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#14b8a6",
  "#3b82f6",
  "#a855f7",
  "#b020c9",
  "#6b02ff",
];

const LIGHT_COLORS = [
  "#b91c1c",
  "#c2410c",
  "#a16207",
  "#4d7c0f",
  "#15803d",
  "#0f766e",
  "#1d4ed8",
  "#7e22ce",
  "#8a189e",
  "#5304c3",
];

function useChartData() {
  const dark = useSelector(getDark);
  const { transactions } = useTransactions();
  const categories = processTransactions(transactions ? transactions : []);

  const labels = categories.map(entry => entry.category);
  const amount = categories.map(entry => entry.totalAmount);
  const backgroundColors = dark ? LIGHT_COLORS : DARK_COLORS;

  const data = {
    responsive: true,
    maintainAspectRatio: false,
    labels: labels,
    datasets: [
      {
        label: "total amount",
        data: amount,
        backgroundColor: backgroundColors,
        borderColor: `${dark ? "#d1d5db" : "#4b5563"}`,
        borderWidth: 1,
      },
    ],
  };
  const options: ChartOptions = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: `${dark ? "#fff" : "#000"}`,
          padding: 10,
        },
      },
    },
  };
  return { data, options };
}

export default function CategoriesPie() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const { data, options } = useChartData();

  return (
    <div className="chart-pie">
      <Doughnut data={data} options={options} redraw={true} />
    </div>
  );
}

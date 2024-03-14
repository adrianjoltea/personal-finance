import { useTransactions } from "./useTransactions";
import { processTransactions } from "./getCategories";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

export default function TransactionBar() {
  const { transactions = [] } = useTransactions();
  const categories = processTransactions(transactions);
  console.log(categories);
  return (
    <div className="bar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={categories}>
          <CartesianGrid strokeDasharray={3} />
          <XAxis dataKey="category" />
          <Tooltip />
          <Bar dataKey="totalAmount" fill="red" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

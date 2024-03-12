import { useTransactions } from "./useTransactions";
import { processTransactions } from "./getCategories";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { categoryColors } from "../../common/variables";

export default function CategoriesPie() {
  try {
    const trasactions = useTransactions();
    const categories = processTransactions(trasactions);

    console.log(categories);

    return (
      <div className="chart-pie">
        <ResponsiveContainer width="100%" height={380}>
          {/* <PieChart>
            <Pie
              data={categories}
              dataKey="totalAmount"
              // nameKey="category"
              innerRadius={60}
              outerRadius={120}
              cx="50%"
              cy="50%"
              paddingAngle={3}
            >
              {categories.map(entry => (
                <Cell
                  key={entry.category}
                  fill={categoryColors[entry.category.toLowerCase()]}
                  // fill="blue"
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              verticalAlign="middle"
              align="right"
              layout="vertical"
              iconSize={15}
              iconType="circle"
            />
          </PieChart> */}
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={categories}>
            <PolarGrid />
            <PolarAngleAxis dataKey="category" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="totalAmount"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.5}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  } catch (error) {
    console.error("Error rendering CategoriesPie:", error);
    return null; // Or render an error message
  }
}

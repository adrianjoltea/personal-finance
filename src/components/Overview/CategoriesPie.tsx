import React from "react";
import { useTransactions } from "./useTransactions";
import { processTransactions } from "./getCategories";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { categoryColors } from "../../common/variables";

export default function CategoriesPie() {
  const trasactions = useTransactions();
  const categories = processTransactions(trasactions);

  return (
    <div>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={categories}
            dataKey="totalAmount"
            nameKey="category"
            innerRadius={85}
            outerRadius={110}
            cx="40%"
            cy="50%"
            paddingAngle={3}
          >
            {categories.map(entry => (
              <Cell
                key={entry.totalAmount}
                fill={categoryColors[entry.category]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

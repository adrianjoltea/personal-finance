import { Transactions } from "../Interface/OverviewInterface";

export function processTransactions(transactionData: Transactions[]) {
  const categoryMap = new Map<string, number>();

  transactionData.forEach(transaction => {
    const { category, amount } = transaction;
    const lowerCaseCategory = category.toLowerCase();
    const currentTotal = categoryMap.get(lowerCaseCategory) || 0;
    categoryMap.set(category, currentTotal + amount);
  });
  const categoryWiseData = Array.from(categoryMap).map(
    ([category, totalAmount]) => ({
      category,
      totalAmount,
    })
  );

  return categoryWiseData;
}

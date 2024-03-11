interface transactions {
  amount: number;
  description: string;
  createdAt: Date;
  category: string;
}

export function processTransactions(transactionData: transactions[]) {
  const categoryMap = new Map<string, number>();

  transactionData.forEach(transaction => {
    const { category, amount } = transaction;
    const currentTotal = categoryMap.get(category) || 0;
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

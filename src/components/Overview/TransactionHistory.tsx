import { fakeData } from "../../common/variables";

interface Transaction {
  amount: number;
  reason: string;
  date: string;
}

export default function TransactionHistory() {
  const sortedData = [...fakeData].sort(
    (a: Transaction, b: Transaction) => b.amount - a.amount
  );

  return (
    <div>
      <header>Nush</header>
      {sortedData.map((data: Transaction) => (
        <div style={{ display: "flex", gap: "1rem" }} key={data.reason}>
          <p>{data.amount}</p>
          <p>{data.date}</p>
          <p>{data.reason}</p>
        </div>
      ))}
    </div>
  );
}

import Modal from "../components/Card/Modal";
import Card from "../components/Overview/Card";
import TransactionHistory from "../components/Overview/TransactionHistory";
import WithdrawForm from "../components/Transactions/WithdrawForm";

export default function Overview() {
  return (
    <div className="main-page">
      <Card />
      <TransactionHistory />
      <Modal>
        <WithdrawForm />
      </Modal>
    </div>
  );
}

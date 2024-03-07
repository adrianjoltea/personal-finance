import Modal from "../components/Card/Modal";
import Card from "../components/Overview/Card";
import TransactionChart from "../components/Overview/TransactionChart";
import TransactionChartButtons from "../components/Overview/TransactionChartButtons";
import WithdrawForm from "../components/Transactions/WithdrawForm";

export default function Overview() {
  return (
    <div className="main-page">
      <TransactionChart />
      <Card />
      <TransactionChartButtons />
      <Modal>
        <WithdrawForm />
      </Modal>
    </div>
  );
}

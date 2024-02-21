import { useDispatch } from "react-redux";
import Modal from "../components/Card/Modal";
import Card from "../components/Overview/Card";
import WithdrawForm from "../components/Transactions/WithdrawForm";
import { toggleModal } from "../context/modalSlice";

export default function Overview() {
  const dispatch = useDispatch();
  return (
    <div className="main-page">
      <Card />

      <Modal>
        <WithdrawForm />
      </Modal>
      <button className="btn" onClick={() => dispatch(toggleModal(true))}>
        Withdraw
      </button>
    </div>
  );
}

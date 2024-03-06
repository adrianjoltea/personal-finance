import { useDispatch, useSelector } from "react-redux";
import { getDark } from "../context/darkModeSlice";
import AccountDetails from "../components/Account/AccountDetails";
import Modal from "../components/Card/Modal";
import DepositForm from "../components/Transactions/DepositForm";
import { toggleModal } from "../context/modalSlice";

export default function Account() {
  const dark = useSelector(getDark);
  const dispatch = useDispatch();
  return (
    <div className={`main-page ${dark ? "dark" : ""}`}>
      <AccountDetails />
      <Modal>
        <DepositForm />
      </Modal>
      <button className="btn" onClick={() => dispatch(toggleModal(true))}>
        Add Transaction
      </button>
    </div>
  );
}

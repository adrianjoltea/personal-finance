import DepositForm from "../Transactions/DepositForm";
import WithdrawForm from "../Transactions/WithdrawForm";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../context/modalSlice";
import { CardOperationProps } from "./Interface/CardInterface";
import { useNavigate } from "react-router-dom";

function CardOperation({
  modalId,
  formComponent,
  buttonText,
  openModal,
}: CardOperationProps) {
  return (
    <div className="card-operations-item">
      {modalId && <Modal modalId={modalId}>{formComponent}</Modal>}
      <button className="btn btn-operations" onClick={openModal}>
        {buttonText}
      </button>
    </div>
  );
}

export default function CardOperations() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openDepositModal = () => {
    dispatch(toggleModal({ modalId: "deposit", open: true }));
  };

  const openWithdrawModal = () => {
    dispatch(toggleModal({ modalId: "withdraw", open: true }));
  };

  const openCreateModal = () => {
    navigate("/create-card");
  };

  return (
    <div className="card-operations-container">
      <CardOperation
        modalId="deposit"
        formComponent={<DepositForm />}
        buttonText="Deposit"
        openModal={openDepositModal}
      />
      <CardOperation
        modalId="withdraw"
        formComponent={<WithdrawForm />}
        buttonText="Withdraw"
        openModal={openWithdrawModal}
      />
      <CardOperation buttonText="Add card" openModal={openCreateModal} />
    </div>
  );
}

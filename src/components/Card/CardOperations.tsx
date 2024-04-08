import DepositForm from "../Transactions/DepositForm";
import WithdrawForm from "../Transactions/WithdrawForm";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../context/modalSlice";
import ModalForm from "./ModalForm";
import { CardOperationProps } from "./Interface/CardInterface";

function CardOperation({
  modalId,
  formComponent,
  buttonText,
  openModal,
}: CardOperationProps) {
  return (
    <div className="card-operations-item">
      <Modal modalId={modalId}>{formComponent}</Modal>
      <button className="btn btn-operations" onClick={openModal}>
        {buttonText}
      </button>
    </div>
  );
}

export default function CardOperations() {
  const dispatch = useDispatch();

  const openDepositModal = () => {
    dispatch(toggleModal({ modalId: "deposit", open: true }));
  };

  const openWithdrawModal = () => {
    dispatch(toggleModal({ modalId: "withdraw", open: true }));
  };

  const openCreateModal = () => {
    dispatch(toggleModal({ modalId: "create", open: true }));
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
      <CardOperation
        modalId="create"
        formComponent={<ModalForm modalId="create" />}
        buttonText="Add card"
        openModal={openCreateModal}
      />
    </div>
  );
}

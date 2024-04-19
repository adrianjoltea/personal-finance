import DepositForm from "../Transactions/DepositForm";
import WithdrawForm from "../Transactions/WithdrawForm";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../context/modalSlice";
import { CardOperationProps } from "./Interface/CardInterface";
import { useTranslation } from "react-i18next";
import { TransactionHistoryProps } from "../Overview/Interface/OverviewInterface";

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
  const { t } = useTranslation();
  const { transactionHistory } = t(
    "transactions"
  ) as unknown as TransactionHistoryProps;

  const { deposit, withdraw } = transactionHistory;

  const openDepositModal = () => {
    dispatch(toggleModal({ modalId: "deposit", open: true }));
  };

  const openWithdrawModal = () => {
    dispatch(toggleModal({ modalId: "withdraw", open: true }));
  };

  return (
    <div className="card-operations-container">
      <CardOperation
        modalId="deposit"
        formComponent={<DepositForm />}
        buttonText={deposit}
        openModal={openDepositModal}
      />
      <CardOperation
        modalId="withdraw"
        formComponent={<WithdrawForm />}
        buttonText={withdraw}
        openModal={openWithdrawModal}
      />
    </div>
  );
}

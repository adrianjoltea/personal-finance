import React from "react";
import DepositForm from "../Transactions/DepositForm";
import WithdrawForm from "../Transactions/WithdrawForm";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../context/modalSlice";
import ModalForm from "./ModalForm";

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
      <div className="card-operations-item">
        <Modal modalId="deposit">
          <DepositForm />
        </Modal>
        <button className="btn btn-operations" onClick={openDepositModal}>
          Deposit
        </button>
      </div>
      <div className="card-operations-item">
        <Modal modalId="withdraw">
          <WithdrawForm />
        </Modal>
        <button className="btn btn-operations" onClick={openWithdrawModal}>
          Withdraw
        </button>
      </div>
      <div className="card-operations-item">
        <Modal modalId="create">
          <ModalForm modalId="create" />
        </Modal>
        <button className="btn btn-operations" onClick={openCreateModal}>
          Add card
        </button>
      </div>
    </div>
  );
}

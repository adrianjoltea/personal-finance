import Modal from "../Card/Modal";
import StockLineChart from "./StockLineChart";
import { useDispatch } from "react-redux";
import StockModal from "./StockModal";
import { toggleModal } from "../../context/modalSlice";
import { useState } from "react";
import { InvestProps, Investitions } from "./Interface/InvestInterface";
import { useTranslation } from "react-i18next";

export default function AvailableStocks({
  currentValue,
  name,
  previousValue,
  _id,
}: Investitions) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const text = t("invest") as unknown as InvestProps;

  function handleOpenModal() {
    setIsModalOpen(true);
    dispatch(toggleModal({ modalId: "stock", open: true }));
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    dispatch(toggleModal({ modalId: "stock", open: false }));
  }

  return (
    <div className="invest-card">
      <StockLineChart data={{ previousValue }} />
      <div className="invest-data">
        <div className="invest-card-description">
          <h3>{name}</h3>
        </div>
        <div className="invest-card-amount">
          <span>
            {text.modal.currentValue} {currentValue}
          </span>
        </div>

        <button className="btn btn-login" onClick={handleOpenModal}>
          Invest
        </button>
      </div>
      {isModalOpen && (
        <Modal modalId="stock" handleCloseModal={handleCloseModal}>
          <StockModal _id={_id} name={name} currentValue={currentValue} />
        </Modal>
      )}
    </div>
  );
}

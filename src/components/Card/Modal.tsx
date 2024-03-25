import { ReactNode } from "react";
import { getModal, toggleModal } from "../../context/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useOutsideClick } from "../../hooks/useOutsideClick";

interface ModalProps {
  children: ReactNode;
  modalId: string;
  handleCloseModal?: () => void;
}

interface RootState {
  modal: {
    modals: Record<string, { open: boolean }>;
  };
}

export default function Modal({
  children,
  modalId,
  handleCloseModal,
}: ModalProps) {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => getModal(state, modalId));
  function close() {
    dispatch(toggleModal({ modalId, open: false }));
  }
  const ref = useOutsideClick(close);
  return open ? (
    <div className="overlay">
      <div className="modal" ref={ref}>
        <button
          className="modal-button"
          onClick={handleCloseModal ? handleCloseModal : close}
        >
          X
        </button>
        {children}
      </div>
    </div>
  ) : null;
}

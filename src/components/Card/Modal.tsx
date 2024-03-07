import { ReactNode } from "react";
import { getModal, toggleModal } from "../../context/modalSlice";
import { useDispatch, useSelector } from "react-redux";

interface ModalProps {
  children: ReactNode;
  modalId: string;
}

interface RootState {
  modal: {
    modals: Record<string, { open: boolean }>;
  };
}

export default function Modal({ children, modalId }: ModalProps) {
  const open = useSelector((state: RootState) => getModal(state, modalId));
  const dispatch = useDispatch();

  return open ? (
    <div className="overlay">
      <div className="modal">
        <button
          className="modal-button"
          onClick={() => dispatch(toggleModal({ modalId, open: false }))}
        >
          X
        </button>
        {children}
      </div>
    </div>
  ) : null;
}

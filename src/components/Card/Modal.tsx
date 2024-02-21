import { ReactNode } from "react";
import { getModal, toggleModal } from "../../context/modalSlice";
import { useDispatch, useSelector } from "react-redux";

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const open = useSelector(getModal);
  const dispatch = useDispatch();

  return open ? (
    <div className="overlay">
      <div className="modal">
        <button
          className="modal-button"
          onClick={() => dispatch(toggleModal(false))}
        >
          X
        </button>
        {children}
      </div>
    </div>
  ) : null;
}

import { getModal, toggleModal } from "../../context/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { ModalProps, RootState } from "./Interface/CardInterface";

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

  return open ? (
    <div className="overlay">
      <div className="modal">
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

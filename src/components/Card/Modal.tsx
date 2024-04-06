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

  function handleClickInsideModal(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  return open ? (
    <div className="overlay" onClick={close}>
      <div className="modal" onClick={handleClickInsideModal}>
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

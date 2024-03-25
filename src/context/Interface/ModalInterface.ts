interface ModalState {
  open: boolean;
}

interface ModalProps {
  modals: Record<string, ModalState>;
}
export type { ModalProps, ModalState };

import { ReactNode } from "react";

interface CardInput {
  _id?: string | undefined;
  name: string;
  balance: number;
  currency: string;
}

interface CardDetailsProps {
  balance: number;
  currency: string;
  name: string;
  _id: string | undefined;
  handleClick?: (clickedCard: CardInput) => void;
  hasEffects: boolean;
}

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

interface IFormInput {
  name: string;
  balance: number;
  currency: string;
}

interface ModalFormProps {
  modalId: string;
}

interface CardOperationProps {
  modalId: string;
  formComponent: JSX.Element;
  buttonText: string;
  openModal: () => void;
}

export type {
  CardInput,
  CardDetailsProps,
  ModalProps,
  RootState,
  IFormInput,
  ModalFormProps,
  CardOperationProps,
};

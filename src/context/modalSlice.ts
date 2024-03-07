import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  open: boolean;
}

interface ModalProps {
  modals: Record<string, ModalState>;
}

const initialState: ModalProps = {
  modals: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal(
      state,
      action: PayloadAction<{ modalId: string; open: boolean }>
    ) {
      const { modalId, open } = action.payload;
      state.modals[modalId] = { open };
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;

export const getModal = (
  state: { modal: ModalProps },
  modalId: string
): boolean => state.modal.modals[modalId]?.open || false;

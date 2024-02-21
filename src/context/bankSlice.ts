import { createSlice } from "@reduxjs/toolkit";

interface Bank {
  id: string;
  name: string;
}

interface BankProps {
  banks: Bank[];
}

const initialState = {
  banks: [],
};

const bankSlice = createSlice({
  name: "banks",
  initialState,
  reducers: {
    updateBank(state, action) {
      state.banks = action.payload;
    },
  },
});

export const { updateBank } = bankSlice.actions;

export default bankSlice.reducer;

export const getBank = (state: { banks: BankProps }) => state.banks.banks;

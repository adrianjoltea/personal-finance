import { createSlice } from "@reduxjs/toolkit";
import { CardProps } from "./Interface/BankInterface";

const initialState = {
  cards: [],
  mainCard: JSON.parse(localStorage.getItem("mainCard") || "[]"),
};

const cardSlice = createSlice({
  name: "userCards",
  initialState,
  reducers: {
    setMainCard(state, action) {
      if (action.payload !== null) {
        state.mainCard = action.payload;
      }
    },

    setCurrentCards(state, action) {
      state.cards = action.payload;
    },
  },
});

export const { setCurrentCards, setMainCard } = cardSlice.actions;

export default cardSlice.reducer;

export const getCard = (state: { userCards: CardProps }) =>
  state.userCards.cards;

export const getMainCard = (state: { userCards: CardProps }) =>
  state.userCards.mainCard;

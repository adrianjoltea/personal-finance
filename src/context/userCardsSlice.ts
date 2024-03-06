import { createSlice } from "@reduxjs/toolkit";

interface Card {
  _id: string;
  name: string;
  balance: number;
  currency: string;
}

interface CardProps {
  cards: Card[];
  mainCard: Card;
}

const initialState = {
  cards: [],
  mainCard: JSON.parse(localStorage.getItem("mainCard") || "[]"),
};

const cardSlice = createSlice({
  name: "userCards",
  initialState,
  reducers: {
    // addCard(state, action) {
    //   if (action.payload !== null) {
    //     state.cards = [...state.cards, action.payload];
    //   }
    // },
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

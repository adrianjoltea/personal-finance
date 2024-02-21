import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./context/modalSlice";
import darkModeReducer from "./context/darkModeSlice";

import userCardsReducer from "./context/userCardsSlice";
import userReducer from "./context/userSlice";
import bankReducer from "./context/bankSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    darkMode: darkModeReducer,
    userCards: userCardsReducer,
    user: userReducer,
    banks: bankReducer,
  },
});

export default store;

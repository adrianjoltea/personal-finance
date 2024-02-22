import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./context/modalSlice";
import generalReducer from "./context/darkModeSlice";

import userCardsReducer from "./context/userCardsSlice";
import userReducer from "./context/userSlice";
import bankReducer from "./context/bankSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    general: generalReducer,
    userCards: userCardsReducer,
    user: userReducer,
    banks: bankReducer,
  },
});

export default store;

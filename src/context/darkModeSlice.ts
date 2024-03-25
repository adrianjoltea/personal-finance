import { createSlice } from "@reduxjs/toolkit";
import { GeneralState } from "./Interface/DarkModeInterface";

const initialState: GeneralState = {
  dark: localStorage.getItem("darkMode") === "true" ? true : false,
  navOpen: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.dark = !state.dark;
      localStorage.setItem("darkMode", state.dark.toString());
    },
    toggleNav(state, action) {
      state.navOpen = action.payload;
    },
  },
});

export const { toggleDarkMode, toggleNav } = generalSlice.actions;

export default generalSlice.reducer;

export const getDark = (state: { general: GeneralState }): boolean =>
  state.general.dark;

export const getNav = (state: { general: GeneralState }): boolean =>
  state.general.navOpen;

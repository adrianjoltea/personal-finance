import { createSlice } from "@reduxjs/toolkit";

interface GeneralState {
  dark: boolean;
  navOpen: boolean;
}

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
    toggleNav(state) {
      state.navOpen = !state.navOpen;
    },
  },
});

export const { toggleDarkMode, toggleNav } = generalSlice.actions;

export default generalSlice.reducer;

export const getDark = (state: { general: GeneralState }): boolean =>
  state.general.dark;

export const getNav = (state: { general: GeneralState }): boolean =>
  state.general.navOpen;

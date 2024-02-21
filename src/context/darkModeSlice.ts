import { createSlice } from "@reduxjs/toolkit";

interface DarkModeState {
  dark: boolean;
}

const initialState: DarkModeState = {
  dark: localStorage.getItem("darkMode") === "true" ? true : false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.dark = !state.dark;
      localStorage.setItem("darkMode", state.dark.toString());
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;

export const getDark = (state: { darkMode: DarkModeState }): boolean =>
  state.darkMode.dark;

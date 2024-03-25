import { createSlice } from "@reduxjs/toolkit";
import { UserProps } from "./Interface/UserInterface";

const initialState = {
  user: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;

export const getUser = (state: { user: UserProps }) => state.user.user;

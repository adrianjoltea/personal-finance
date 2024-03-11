import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  username: string;
  email: string;
  profilePicture: string;
}

interface UserProps {
  user: User;
}

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

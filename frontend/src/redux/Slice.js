import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "ajibola",
    email: "neverthelesse21@gmail.com",
    profilePics: "/user/user1.jpg",
  },
  reducers: {
    changeuser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.profilePics = action.payload.profilePics;
    },
  },
});

export const { changeuser } = userSlice.actions;
export default userSlice.reducer;

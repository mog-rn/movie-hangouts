import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  isLoggedIn: boolean;
  phone: string;
  email: string;
  username: string;
  profile_pic: string;
  name: string;
  role: string;
}

const initialState: UserState = {
  isLoggedIn: false,
  phone: "",
  email: "",
  username: "",
  profile_pic: "",
  name: "",
  role: "",
};

export const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.email = action.payload.email;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.phone = action.payload.phone;
      state.username = action.payload.username;
      state.profile_pic = action.payload.profile_pic;
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
    setSignOut: (state) => {
      state.email = "";
      state.phone = "";
      state.username = "";
      state.profile_pic = "";
      state.name = "";
      state.role = "";
      state.isLoggedIn = false;
    },
  },
});

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state: { userAuth: { isLoggedIn: any } }) =>
  state.userAuth.isLoggedIn;
export const selectEmail = (state: { userAuth: { email: any } }) =>
  state.userAuth.email;
export const selectPhone = (state: { userAuth: { phone: any } }) =>
  state.userAuth.phone;
export const selectUsername = (state: { userAuth: { username: any } }) =>
  state.userAuth.username;
export const selectProfilePic = (state: { userAuth: { profile_pic: any } }) =>
  state.userAuth.profile_pic;
export const selectName = (state: { userAuth: { name: any } }) =>
  state.userAuth.name;
export const selectRole = (state: { userAuth: { role: any } }) =>
  state.userAuth.role;

export default authSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { UserProfileInFirebase } from "../../models/InterfaceUserProfile";

export type UserProfileType = {
  userDataTab: UserProfileInFirebase[],
  loginEmail: boolean,
  isLoading: boolean,
  isError: boolean,
  isSuccess: boolean,
};
const initialState: UserProfileType = {
  userDataTab: [],
  loginEmail: false,
  isLoading: true,
  isError: false,
  isSuccess: true,
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    getUserData: (state, actions) => {
      state.userDataTab = actions.payload
    },
 /*    addContactToFirebase: (state, actions) => {
      state.contactsTab.unshift(actions.payload);
    },
    removeContact: (state, actions) => {
      state.contactsTab = actions.payload
    },
    updateContact: (state, actions) => {
      state.contactsTab = actions.payload;
    } */
    setLoginEmail(state, action) {
      state.loginEmail = action.payload;
    },
    setSuccessUser(state, action) {
      state.isSuccess = action.payload;
    },
    setLoadingUser(state, action) {
      state.isLoading = action.payload;
    }
  },
});

export const { getUserData, setSuccessUser, setLoadingUser, setLoginEmail } = userProfileSlice.actions;
export const getUserProfile = (state: RootState) => state.userProfile.userDataTab
export const isLoginEmail = (state: RootState) => state.userProfile.loginEmail;
export const isSuccessUser = (state: RootState) => state.userProfile.isSuccess;
export const isLoadingUser = (state: RootState) => state.userProfile.isLoading;
export default userProfileSlice.reducer;
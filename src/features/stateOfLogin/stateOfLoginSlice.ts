import { createSlice } from '@reduxjs/toolkit';
import { Settings } from 'http2';
import { RootState, } from '../../app/store';

export type LoginStateType = {
  isLoginUser: boolean;
  user: {
    userID: string,
    email: string,
    password: string,
    photo: string,
    token: string,
  },
  userGoogleOrFacebook: {
    userID: string,
    userName: string,
    email: string,
    photo: string,
  },
  photo: string,

}

const initialState: LoginStateType = {
  isLoginUser: false,
  user: {
    userID: '',
    email: '',
    password: '',
    photo: '',
    token: '',
   },
  userGoogleOrFacebook: {
    userID: '',
    userName: '',
    email: '',
    photo: '',
  },
   photo: '',
  };

const stateOfLoginSlice = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {
    isAuthenticated: (state, action) => {
      state.isLoginUser = action.payload;
    },
    userOfLogged: (state, action) => {
      state.user = action.payload;
    },
    userOfLoggedWithGoogleOrFacebook: (state, action) => {
      state.userGoogleOrFacebook = action.payload;
    },
     userOfLoggedEmailAndPasswordPhoto: (state, action) => {
      state.photo = action.payload;
    },
  }
})

export const { isAuthenticated, userOfLogged, userOfLoggedWithGoogleOrFacebook, userOfLoggedEmailAndPasswordPhoto } = stateOfLoginSlice.actions;
export const stateLogin = (state: RootState) => state;
export const stateUser = (state: RootState) => state.stateOfLogin.user;
export const stateUserGoogleOrFacebook = (state: RootState) => state.stateOfLogin.userGoogleOrFacebook;
export const stateEmailAndPasswordPhoto = (state: RootState) => state.stateOfLogin.photo;
export default stateOfLoginSlice.reducer;
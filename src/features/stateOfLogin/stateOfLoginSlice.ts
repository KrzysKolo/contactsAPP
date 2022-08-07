import { createSlice } from '@reduxjs/toolkit';
import { RootState, } from '../../app/store';

export type LoginStateType = {
  isLoginUser: boolean;
  user: {
    userID: string,
    email: string,
    password: string,
    token: string,
  };
}

const initialState: LoginStateType = {
  isLoginUser: false,
  user: {
    userID: '',
    email: '',
    password: '',
    token: ''
    }
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
    }
  }
})

export const { isAuthenticated, userOfLogged } = stateOfLoginSlice.actions;
export const stateLogin = (state: RootState) => state;
export const stateUser = (state: RootState) => state.stateOfLogin.user;
export default stateOfLoginSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { RootState, } from '../../app/store';

export type LoginStateType = {
  isLoginUser: boolean;
  userName: string;
}

const initialState: LoginStateType = {
  isLoginUser: false,
  userName: "",
};

const stateOfLoginSlice = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {
    isAuthenticated: (state, action) => {
      state.isLoginUser = action.payload;
    },
    userNameOfLogged: (state, action) => {
      state.userName = action.payload;
    }
  }
})

export const { isAuthenticated, userNameOfLogged } = stateOfLoginSlice.actions;
export const stateLogin = (state: RootState) => state;
export const stateUserName = (state: RootState) => state.stateOfLogin.userName;
export default stateOfLoginSlice.reducer;
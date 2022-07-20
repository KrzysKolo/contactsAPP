import { createSlice } from '@reduxjs/toolkit';
import { RootState, } from '../../app/store';

export type LoginStateType = {
  isLoginUser: boolean;
}

const initialState: LoginStateType = {
  isLoginUser: false,
};

const stateOfLoginSlice = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {
    changeStateLogin: (state, action) => {
      state.isLoginUser = action.payload;
    },
  }
})

export const { changeStateLogin } = stateOfLoginSlice.actions;
export const stateLogin = (state: RootState) => state;
export default stateOfLoginSlice.reducer;
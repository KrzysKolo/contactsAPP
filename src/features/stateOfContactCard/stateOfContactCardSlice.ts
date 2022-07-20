import { createSlice } from '@reduxjs/toolkit';
import { RootState, } from '../../app/store';

export type CardStateType = {
  isVisibleCard: boolean;
}

const initialState: CardStateType = {
  isVisibleCard: false,
};

const stateOfContactCardSlice = createSlice({
  name: 'stateVisibleCard',
  initialState,
  reducers: {
    changeStateCard: (state, action) => {
      state.isVisibleCard = action.payload;
    },
  }
})

export const { changeStateCard } = stateOfContactCardSlice.actions;
export const stateCard = (state: RootState) => state;
export default stateOfContactCardSlice.reducer;
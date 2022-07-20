import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type SearchValueType = {
  searchValue: string,
};

const initialState = {
  searchValue: '',
};


const getSearchValueSlice = createSlice({
  name: 'getSearchValue',
  initialState,
  reducers: {
    getSearchValue: (state, action) => {
      state.searchValue = action.payload;
      },
    },
});

export const { getSearchValue } = getSearchValueSlice.actions;
export const searchValue = (state: RootState) => state;
export default getSearchValueSlice.reducer;
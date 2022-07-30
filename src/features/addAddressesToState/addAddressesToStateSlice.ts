import { createSlice } from '@reduxjs/toolkit';
import { RootState, } from '../../app/store';

export interface ContactAddresses  {
  city?: string,
  street?: string,
  code?: string,
  email?: string,
  phone?: string,
}
export type contactAddressesType = {
  addressesTab: ContactAddresses[]
}
const initialState: contactAddressesType = {
  addressesTab: [],
};

const addAddressesToStateSlice = createSlice({
  name: 'addressesContact',
  initialState,
  reducers: {
    addAddressesContact: (state, action) => {
      state.addressesTab = action.payload;
    },
  }
})

export const { addAddressesContact } = addAddressesToStateSlice.actions;
export const stateContactAddresses = (state: RootState) => state.addAddressesToState.addressesTab;
export default addAddressesToStateSlice.reducer;
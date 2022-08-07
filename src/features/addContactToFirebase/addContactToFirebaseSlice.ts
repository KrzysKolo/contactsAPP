import { createSlice } from '@reduxjs/toolkit';
import { RootState, } from '../../app/store';
import { ContactAddresses } from '../addAddressesToState/addAddressesToStateSlice';
import { SocialMediaUrl } from '../addSocialMediaToState/addSocialmediaToStateSlice';


export interface ContactToFirebase  {
  idContact: string,
  userID: string,
  name: string,
  description?: string,
  typeContact: string,
  addresses?: ContactAddresses[] | any,
  socialMedia?: SocialMediaUrl[] | any,
  image?: {
    name: string,
    url: string
  }
}
export type contactToFirebaseType = {
  contacts: ContactToFirebase[],
  isSuccess: boolean,
}
const initialState: contactToFirebaseType = {
  contacts: [],
  isSuccess: false,
};

const addContactToFirebaseSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactToState: (state, action) => {
      state.contacts = action.payload;
    },
    addContactToFirebase: (state, actions) => {
      state.contacts.unshift(actions.payload);
    },
    setSuccess(state, action) {
      state.isSuccess = action.payload;
    },
  }
})

export const { addContactToFirebase, addContactToState, setSuccess } = addContactToFirebaseSlice.actions;
export const stateContacts = (state: RootState) => state.addContactToFirebase.contacts;
export const isSuccess = (state: RootState) => state.addContactToFirebase.isSuccess;
export default addContactToFirebaseSlice.reducer;
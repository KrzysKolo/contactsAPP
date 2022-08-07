import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ContactInFirebase } from "../../models/InterfaceContactsInFirebase";



export type ContactsTabType = {
  contactsTab: ContactInFirebase[],
  isLoading: boolean,
  isError: boolean,
  isSuccess: boolean,
};
const initialState: ContactsTabType = {
  contactsTab: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const firebaseContactsSlice = createSlice({
  name: "firebaseContacts",
  initialState,
  reducers: {
    getContact: (state, actions) => {
      state.contactsTab = actions.payload
    },
    addContactToFirebase: (state, actions) => {
      state.contactsTab.unshift(actions.payload);
    },
    removeContact: (state, actions) => {
      state.contactsTab = actions.payload
    },
    updateContact: (state, actions) => {
      state.contactsTab = actions.payload;
    },
    setSuccess(state, action) {
      state.isSuccess = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    }
  },
});

export const { getContact, addContactToFirebase, removeContact, updateContact, setSuccess, setLoading } = firebaseContactsSlice.actions;
export const getAllContacts = (state: RootState) => state.firebaseContacts.contactsTab;
export const addNewContact = (state: RootState) => state.firebaseContacts.contactsTab;
export const removeOneContact = (state: RootState) => state.firebaseContacts.contactsTab;
export const isSuccess = (state: RootState) => state.firebaseContacts.isSuccess;
export const isLoading = (state: RootState) => state.firebaseContacts.isLoading;
export default firebaseContactsSlice.reducer;


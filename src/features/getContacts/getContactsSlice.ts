import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts } from '../../services/contacts/contacts';
import { ContactToFirebase } from "../addContactToFirebase/addContactToFirebaseSlice";

/* export type Contacts = {
  id?: string | any;
  contactID: string;
  name: string;
  email: string;
  phone: string;
  street: string;
  code: string;
  city: string;
  description: string;
  image: {
    name?: string,
    url?: string,
  },
  typeContact: string;
}; */

export type ContactsTabType = {
  contactsTab: ContactToFirebase[],
  isLoading: boolean,
  isError: boolean,
};
const initialState: ContactsTabType = {
  contactsTab: [],
  isLoading: true,
  isError: false,
};

export const getContactsFromFirebase = createAsyncThunk(
  'contacts/getContactsFromFirebase', async (name, thunkApi) => {
    try {
      const contactsAll = await getContacts()
      const contactsTab = [];
      console.log(contactsAll.data);
      for (const key in contactsAll.data) {
        contactsTab.push({ ...contactsAll.data[key], id: key })
      }
      return contactsTab;
    } catch (error) {
      return thunkApi.rejectWithValue('something went wrong');
    }
  }
);

const getContactsFromFirebaseSlice = createSlice({
  name: 'getContactsFromFirebase',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContactsFromFirebase.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getContactsFromFirebase.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contactsTab = action.payload;
      })
      .addCase(getContactsFromFirebase.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
    },
  });

export default getContactsFromFirebaseSlice.reducer;
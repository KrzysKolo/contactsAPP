import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
//import getContactsReducer from '../features/getContacts/getContactsSlice';
import stateOfLoginReducer from '../features/stateOfLogin/stateOfLoginSlice';
import stateOfContactCardReducer from '../features/stateOfContactCard/stateOfContactCardSlice';
import getSearchValueSliceReducer from '../features/getSearchValue/getSearchValueSlice';
import addAddressesToStateReducer from '../features/addAddressesToState/addAddressesToStateSlice';
import addSocialmediaToStateReducer from '../features/addSocialMediaToState/addSocialmediaToStateSlice';
import firebaseContactsReducer from '../features/firebaseContacts/firebaseContactsSlice';
import userProfileReducer from '../features/userProfile/userProfileSlice';

export const store = configureStore({
  reducer: {
    firebaseContacts: firebaseContactsReducer,
    userProfile: userProfileReducer,
    stateOfLogin: stateOfLoginReducer,
    stateOfContactCard: stateOfContactCardReducer,
    getSearchValue: getSearchValueSliceReducer,
    addAddressesToState: addAddressesToStateReducer,
    addSocialmediaToState: addSocialmediaToStateReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

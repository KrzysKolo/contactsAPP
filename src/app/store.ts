import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import getContactsReducer from '../features/getContacts/getContactsSlice';
import stateOfLoginReducer from '../features/stateOfLogin/stateOfLoginSlice';
import stateOfContactCardReducer from '../features/stateOfContactCard/stateOfContactCardSlice';
import getSearchValueSliceReducer from '../features/getSearchValue/getSearchValueSlice';


export const store = configureStore({
  reducer: {
    getContacts: getContactsReducer,
    stateOfLogin: stateOfLoginReducer,
    stateOfContactCard: stateOfContactCardReducer,
    getSearchValue: getSearchValueSliceReducer,
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

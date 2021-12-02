import { combineReducers } from "redux";
import AuthReducer from './auth/slices';
import { configureStore } from "@reduxjs/toolkit";
import { contacts, loading, error, filterReducer } from './phonebook/phonebook-reducer';
import {
  persistStore,
  persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const AuthPersistConfig = {
  key: 'authToken',
  storage,
  whitelist: ['token'],
};

const ContactsPersistConfig = {
  key: 'Contacts',
  storage,
};

const contactsReducer = combineReducers({
  contacts,
  loading,
  error,
  filterReducer,
});

const authPersistReducer = persistReducer(AuthPersistConfig, AuthReducer);
const contactsPersistReducer = persistReducer(ContactsPersistConfig, contactsReducer);


export const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    contacts: contactsPersistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);




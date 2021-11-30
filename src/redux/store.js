import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { contacts, loading, error, filterReducer } from './phonebook/phonebook-reducer';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


const rootReducer = combineReducers({
  contacts,
  loading,
  error,
  filterReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})




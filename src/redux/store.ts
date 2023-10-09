import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {
  persistReducer
} from 'redux-persist'
import AuthReducer from "./reducers/AuthReducer/AuthReducer"

const persistConfig = {
  key: 'root',
  version: 1,
  blacklist: ['drawertoggle','mandatedrawer'],
  storage
}

const rootReducer = combineReducers({
  userAuth: AuthReducer,
   
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
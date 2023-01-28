import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import appReducer from "./reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  appReducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer : persistedReducer,
  middleware : getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck : {
      ignoreActions : {FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER}
    }
  }).concat(logger)
})

export const persistor = persistStore(store);
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";

import registerReducer from './modalsSlice';
import userReducer from './usersSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['modals', 'users']
}

const rootReducer = combineReducers({
    modals: registerReducer,
    users: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
})

export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

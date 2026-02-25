import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";

import registerReducer from './modalsSlice';
import userReducer from './usersSlice';
import eventReducer from './eventsSlice';
import ticketReducer from './ticketsSlice'
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['users']
}

const rootReducer = combineReducers({
    modals: registerReducer,
    users: userReducer,
    events: eventReducer,
    tickets: ticketReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
})

export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
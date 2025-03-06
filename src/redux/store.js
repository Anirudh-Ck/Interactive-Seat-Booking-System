import { combineReducers, configureStore } from "@reduxjs/toolkit";
import seatReducer from './reducers/seatSlice'
import userReducer from './reducers/userSlice'
import storage from "redux-persist/lib/storage"; 
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['seats']
}

const rootReducer = combineReducers({
    seats: seatReducer,
    user : userReducer
})

const persistedReducers = persistReducer(persistConfig,rootReducer)

const store = configureStore({
    reducer :  persistedReducers,
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: false
        }),
});

export const persistor = persistStore(store);
export default store;

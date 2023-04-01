import { configureStore } from '@reduxjs/toolkit';
import MyproductReducer from './redux/MyProduct/MyProductSlice'
import MyCartReducer from './redux/MyProduct/MyCartSlice'
import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import  storage  from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

let persistConfig={
    key:'root',
    storage: AsyncStorage
}
let rootReducer = combineReducers({
    product:MyproductReducer,
    cart:MyCartReducer,
});

let persistedReducer = persistReducer(persistConfig ,rootReducer)
const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

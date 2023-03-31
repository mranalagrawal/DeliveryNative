import { configureStore } from '@reduxjs/toolkit';
import MyproductReducer from './redux/MyProduct/MyProductSlice'
import MyCartReducer from './redux/MyProduct/MyCartSlice'


const store = configureStore({
reducer:{
    product:MyproductReducer,
    cart:MyCartReducer,
}
});

export default store;

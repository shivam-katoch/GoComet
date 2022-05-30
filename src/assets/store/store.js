import {configureStore} from '@reduxjs/toolkit';
import productReducer from './productSlice';
import filterReducer from './filterSlice';
import wishReducer from './wishSlice';
import bagReducer from './bagSlice';
import amountReducer from './amountSlice';
export const store=configureStore({
    reducer:{
        Products:  productReducer,
        Filter: filterReducer,
        Wish:wishReducer,
        Bag:bagReducer,
        Amount:amountReducer
    },
});
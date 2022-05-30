import {createSlice} from "@reduxjs/toolkit";
import { products } from "../data/data";
 const initialState={
     product:products,
     neverchange:products,
 };

const productSlice = createSlice({
    name:'Products',
    initialState,
    reducers:{
        setProducts :(state,action)=>{
            const dataRetrived =action.payload;
            state.product = dataRetrived;

    }
}
});
export const {setProducts} = productSlice.actions;
export default productSlice.reducer

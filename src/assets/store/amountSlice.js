import {createSlice} from "@reduxjs/toolkit";

 const initialState={
    amount:0,
    
 };

const amountSlice = createSlice({
    name:'Amount',
    initialState,
    reducers:{
        setAmount :(state,action)=>{
            const dataRetrived =action.payload;
            state.amount = dataRetrived;

    }
}
});
export const {setAmount} = amountSlice.actions;
export default amountSlice.reducer

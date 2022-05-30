import {createSlice} from "@reduxjs/toolkit";

 const initialState={
     bag:[],
     amount:0,
    
 };

const bagSlice = createSlice({
    name:'Bag',
    initialState,
    reducers:{
        setBag :(state,action)=>{
            const data =action.payload;
            const dataRetrived=data.filter((v,i,a)=>a.indexOf(v)===i);
            state.bag = dataRetrived;
            
    },
    setAt:(state,action)=>{
        const data =action.payload;
        state.amount=data;
    }
    
}
});
export const {setBag,setAt} = bagSlice.actions;
export default bagSlice.reducer

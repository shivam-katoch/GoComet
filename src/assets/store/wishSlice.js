import {createSlice} from "@reduxjs/toolkit";

 const initialState={
     wish:[],
     wishselect:[],
    
 };

const wishSlice = createSlice({
    name:'Wish',
    initialState,
    reducers:{
        setWish :(state,action)=>{
            const data =action.payload;
            const dataRetrived=data.filter((v,i,a)=>a.indexOf(v)===i);
            state.wish = dataRetrived;

    }
}
});
export const {setWish} = wishSlice.actions;
export default wishSlice.reducer

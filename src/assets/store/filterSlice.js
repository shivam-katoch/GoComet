import {createSlice} from "@reduxjs/toolkit";

const initialState ={ filters:{ gender: null, 
                       price: [], 
                       discountRange: null,
                       text: "",
                    sortBy:"",}
}

const filterSlice  = createSlice({
  name:'Filter',
  initialState,
  reducers: {
    setGenderFilter: (state, action) => {
      state.filters.gender = action.payload;

    },
    
    setPriceFilter: (state, action) => {
        const arr=action.payload;
        console.log(arr);
      state.filters.price = action.payload;
     
    },
   
    setDiscountRangeFilter: (state, action) => {
        
      state.filters.discountRange =action.payload;
    },
    setTextFilter: (state, action) => {
      state.filters.text = action.payload;
    },
   
    clearFilter: (state) => {
      state = initialState;
    },
    setsort:(state,action)=>{
        state.filters.sortBy=action.payload;
    },
  },
});

export const {
  setPriceFilter,
  setDiscountRangeFilter,
  setGenderFilter,
  setTextFilter,
  clearFilter,
  setsort,
  

} = filterSlice.actions;
export default filterSlice.reducer;
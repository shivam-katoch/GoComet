import React, { useState} from 'react'
import { pink,grey } from '@mui/material/colors';
import {
  Divider,
 
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox} from '@mui/material';
  import { styled } from '@mui/material/styles';
  import{useDispatch} from'react-redux';
  
  import {setPriceFilter,
    setDiscountRangeFilter,
    setGenderFilter,} from '../assets/store/filterSlice';
const Wrapper=styled('div')(`
width: 30rem;


margin:0 4rem;
border: 1px solid #e9e9ed;
border-top:none;
border-left: none;
span {
  font-size: 0.8rem;
  

}
#heading{
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  padding-top:1rem;
  margin-bottom: 14px;
}

`)
const Leftblock = () => {
  
  const dispatch=useDispatch();

  const [prange, setprange] = useState([]);
  
  const getcheckvalue=(e)=>{
    if(e.target.checked){
       setprange([...prange,e.target.value]);
       
         dispatch(setPriceFilter([...prange]));
        }
    else {
     setprange(prange.filter((k)=>k!==e.target.value));
     dispatch(setPriceFilter([...prange]));
        }
       

   }
   console.log(prange);
  const onDiscount=(e)=>{
   
   dispatch(setDiscountRangeFilter(e.target.value));
   
}
  const handleChange = (e) => {
    dispatch(setGenderFilter(e.target.value));
   


  };
  
 
   
   

  

  return (
  <Wrapper>
<FormControl>
  
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    
    onChange={handleChange}
  >
    <FormControlLabel value="Men" control={<Radio size="small"  sx={{ color: grey[500],'&.Mui-checked': {color: pink[600],}, }}/>} label="Men"/>
    <FormControlLabel value="Woman" control={<Radio size="small" sx={{ color: grey[500],'&.Mui-checked': {color: pink[600],}, }}/>} label="Woman" />
    <FormControlLabel value="Boys" control={<Radio size="small" sx={{ color: grey[500],'&.Mui-checked': {color: pink[600],}, }}/>} label="Boys" />
    <FormControlLabel value="Girls" control={<Radio size="small" sx={{ color: grey[500],'&.Mui-checked': {color: pink[600],}, }}/>} label="Girls" />
  </RadioGroup>
  <Divider />
  
  <FormLabel id="heading">PRICE</FormLabel>
  <FormControlLabel control={<Checkbox onClick={getcheckvalue} size="small" value={'300-1500'}  sx={{ color: grey[500],'&.Mui-checked': {color: pink[600],}, }}/>} label="Rs.300 to Rs.1500" />
  <FormControlLabel control={<Checkbox onClick={getcheckvalue} size="small" value={'1500-2500'} sx={{ color: grey[500],'&.Mui-checked': {color: pink[600],}, }}/>} label="Rs.1500 to Rs.2500" />
  <FormControlLabel control={<Checkbox onClick={getcheckvalue} size="small" value={'2500-3500'}sx={{ color: grey[500],'&.Mui-checked': {color: pink[600],}, }}/>} label="Rs.2500 to Rs.3500" />
  <FormControlLabel control={<Checkbox onClick={getcheckvalue} size="small"  value={'3500-5000'}sx={{ color: grey[500],'&.Mui-checked': {color: pink[600],}, }}/>} label="Rs.3500 to Rs.5000" />
  <Divider/>
  
  <FormLabel id="heading" >DISCOUNT RANGE</FormLabel>
   <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    
    onChange={onDiscount} 
  >
    <FormControlLabel value={10} control={<Radio  size="small"  sx={{ color: grey[500],'&.Mui-checked': {color: pink[600],}, }}/>} label="10% and above" />
    <FormControlLabel value={20} control={<Radio  size="small"  sx={{ color: grey[500],'&.Mui-checked': {color: pink[600],}, }}/>} label="20% and above" />
    <FormControlLabel value={30} control={<Radio  size="small"   sx={{ color: grey[500],'&.Mui-checked': {color: pink[600],}, }}/>} label="30% and above" />
    <FormControlLabel value={40} control={<Radio  size="small" sx={{ color: grey[500],'&.Mui-checked': {color: pink[600],}, }}/>} label="40% and above" />
    <FormControlLabel value={50} control={<Radio  size="small"   sx={{ color: grey[500],'&.Mui-checked': {color: pink[600],}, }}/>} label="50% and above" />
    <FormControlLabel value={60} control={<Radio  size="small"  sx={{ color: grey[500],'&.Mui-checked': {color: pink[600],}, }}/>} label="60% and above" />
    <FormControlLabel value={70} control={<Radio  size="small"  sx={{ color: grey[500],'&.Mui-checked': {color: pink[600],}, }}/>} label="70% and above" />
    <FormControlLabel value={80} control={<Radio  size="small"   sx={{ color: grey[500],'&.Mui-checked': {color: pink[600],}, }}/>} label="80% and above" />
  </RadioGroup>
</FormControl>
</Wrapper>
  )
}

export default Leftblock

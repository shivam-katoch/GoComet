import { Box, InputLabel, MenuItem,FormControl,Select, Divider} from '@mui/material'
import React, { useState } from 'react'
import {grey} from '@mui/material/colors'
import{useSelector,useDispatch} from'react-redux';
import Leftblock from './Leftblock'
import Producttemplate from './Producttemplate'
import { styled } from '@mui/material/styles';
import { setsort } from '../assets/store/filterSlice';
const Div=styled('div')
(
    `
    .upper-container{
       
        margin:2rem 4rem 0 4rem;
    
    }
    .filsort{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        margin-top:0;
    }
    .sort{
        margin:0 2rem 1rem ;
        
    }
    #first{
        color:grey;
        font-size:12.5px;
    }
    #bold-small{
        color:${grey[800]};
       font-size:12.5px;
       font-weight:700;
    }
    #bold,#filter{
        color:${grey[800]};
        font-weight:700;
    }
    `
);

const Mainpage = () => {
  const dispatch=useDispatch();
  const products=useSelector((store)=>store.Products.product);
  const filters=useSelector((store)=>store.Filter.filters);
  const [sort,setSort]=useState('');
    
 
    const onSortvaluechange = (event) => {
        setSort(event.target.value)
        dispatch(setsort(event.target.value));
      };
    const sortBy=filters.sortBy
    const newdata=products.filter((product)=> {
      let price = filters.price,discountRange = filters.discountRange, gender = filters.gender, text = filters.text;
      let genderMatch = true;
      if (!!gender) {
          genderMatch = product.gender.toLowerCase() === gender.toLowerCase();
      }
      let lowercasedValue = text.toLowerCase().trim();
      let textMatch = false;
      if (!!lowercasedValue) {
          let noNEED=["id", "images"];
          let filteredData = Object.keys(product).some((key)=>{
              let currentKey = product[key];
              return noNEED.includes(key) ? false : currentKey.toString().toLowerCase().includes(lowercasedValue);
          });
          textMatch = filteredData;
      }
      else {
          textMatch = true;
      }
      let discountRangeMatch = true;
      if (!!discountRange) {
          discountRangeMatch = product.discountPercent >= discountRange;
      }
      let priceMatch = false;
      for (let item of price) {
        const [start, end] = item.split("-");
    
        if (product.price >= parseInt(start) && product.price < parseInt(end)) priceMatch = true;
      }
      priceMatch = price.length > 0 ? priceMatch : true;

      return genderMatch && priceMatch && discountRangeMatch && textMatch;
  })
      .sort(function (a, b) {
      if (sortBy === 'new') {
          return a.postedAt < b.postedAt ? 1 : -1;
      }
      if (sortBy === 'popular') {
          return a.rating < b.rating ? 1 : -1;
      }
      if (sortBy === 'better') {
          return a.discountPercent < b.discountPercent ? 1 : -1;
      }
      if (sortBy === 'high') {
          return a.price < b.price ? 1 : -1;
      }
      if (sortBy === 'low') {
          return a.price < b.price ? -1 : 1;
      }
      else
          return 1;
  });

    
  return (
<Div>
<Box className='upper-container'>
<div>
<div> 
<span id='first'>Home / Clothing / </span>
<span id='bold-small'>Shirts for Men & Women</span>
</div>  
<p>
<span id='bold'>Shirts for Men & Women</span>
<span id='items'> - {products.length} items</span>
</p>
<div className="filsort">
<p id='filter'>FILTERS</p>
<div className='sort'>
<FormControl sx={{width:'15rem',height:'3rem'}}>
  <InputLabel id="sorted">Sort by:</InputLabel>
  <Select
    labelId="sorted"
    id="sot"
    value={sort}
    label="Sort by:"
    onChange={onSortvaluechange}
    sx={{height:'3rem'}}
  >

    <MenuItem value={'new'}>What's New</MenuItem>
    <MenuItem value={'popular'}>Popularity</MenuItem>
    <MenuItem value={'better'}>Better Discount</MenuItem>
    <MenuItem value={'high'}>Price High To Low</MenuItem>
    <MenuItem value={'low'}>Price Low To High</MenuItem>
  </Select>
</FormControl>
    
</div>
</div>
</div>

</Box>
<Divider variant="middle" />
<Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
<Leftblock sort={sort}/>
<Box sx={{ p:'1rem',display:'flex',flexFlow:'row wrap'}}>
{
  newdata.map((props)=><Producttemplate props={props}/>)
}
</Box>
</Box> 
    </Div>
  )
}

export default Mainpage

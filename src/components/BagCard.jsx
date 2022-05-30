import { Button, FormControl, InputLabel, MenuItem, Select,Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey,pink } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {TiDeleteOutline} from 'react-icons/ti'
import {BsCheck2Circle} from 'react-icons/bs'
import empty from '../assets/image/empty.jpg';
import { setWish } from '../assets/store/wishSlice';
import { setBag } from '../assets/store/bagSlice';
import { setAmount } from '../assets/store/amountSlice';
import { useSelector,useDispatch } from 'react-redux';



const Cont=styled('div')(`
  
 
  margin:0.8rem;
  
  height:280px;
  width:400px;
  background-color:${grey[100]};
  
.main{
    position:relative;
    height:100%;
    width: 100%;
   
  
img{   
        height:190px;
        width:120px;
     }
   
     .pos,.selector{
  
     display:flex;
     flex-direction:row;
     padding:4px;
}
.pos{
  padding:1rem;
}

.brand{
      text-transform:uppercase;
      margin:0;
      font-weight: 600;
    }

.content{
         padding-left:0.5rem;
     }
.price{
        font-weight: 600;
     }
.productname{
        text-transform:uppercase;
        color:grey;
        font-size: 1rem;
        margin:0;
        padding:2px 0 2px ;
     }
.oprice{
         text-decoration:line-through;
         padding-left:0.5rem;
     }
.discount{
         color:orange;
         padding-left:0.5rem;
     }
  .info{
    margin:0;
    padding:0;
    font-size:10px;
    .icon{
      color:green;
    }
  }
  .actionbutton{
      display:flex;
      justify-content:space-evenly;
      padding-left:4px;
      padding-right:4px;
  }
  #simple-select-size,#simple-select-qty,#simple-select-size-label,#simple-select-qty-label{
    color:#ff3f6c;
    :hover{
      box-shadow: 0px 0px 6px 1px ${pink[100]};
          }
   }
 
     

}
`)
export const BagCard = ({props}) => {
  const {id,brandName,productName,price,originalPrice,images,discountPercent}=props;
  const [size, setSize] = useState('');
  const [qty, setQty] = useState('');
 const dispatch=useDispatch();
 const wishProduct=useSelector((store)=>store.Wish.wish);
 const bag=useSelector((store)=>store.Bag.bag);
 let amount=useSelector((store)=>store.Amount.amount);
  const towishlist=(ev)=>{
   
      dispatch(setWish([...wishProduct,props]))
      dispatch(setBag(bag.filter((e)=>e.id!==ev.target.value)));
    }
  const remove=(ev)=>{
    dispatch(setBag(bag.filter((e)=>e.id!==ev.target.value)));
  }

  const handleSize = (event) => {
    setSize(event.target.value);
  };
  const handleQty = (event) => {
    amount-=qty*price;
    setQty(event.target.value);
   
  };
  useEffect(()=>{
    totalamount();
  },[qty,bag.length]);
  
  const totalamount=()=>{
  if(bag.length!== 0)
    {amount+=qty*price;}
    else {
      amount=0;
    }
    dispatch(setAmount(amount));
  }
 
  return (
    <Cont>
         <div className='main'>
      <div className='pos'>
          <img src={images[0]} alt={brandName}/>
         
        <div className='content'>
          <p className='brand'>{brandName}.</p>
          <p className='productname'>{productName}</p>
         
          <div className='pricetag'>
          <span className='price'>Rs. {price} </span>
          <span className='oprice'>Rs. {originalPrice}</span>
          <span className='discount'>{discountPercent}%</span>
          <div className='selector'>
      <Box sx={{ width:100, }}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-size-label">Size</InputLabel>
        <Select
          labelId="simple-select-size-label"
          id="simple-select-size"
          value={size}
          label="size"
          onChange={handleSize}
        >
          <MenuItem className='menu'value={38}>38</MenuItem>
          <MenuItem className='menu'value={40}>40</MenuItem>
          <MenuItem className='menu'value={42}>42</MenuItem>
          <MenuItem className='menu'value={44}>44</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{width:"1rem"}}></Box>
    <Box sx={{ width: 100}}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-qty-label">Qty</InputLabel>
        <Select
          labelId="simple-select-qty-label"
          id="simple-select-qty"
          value={qty}
          label="qty"
          onChange={handleQty}
        >
          <MenuItem className='menu'value={1}>1</MenuItem>
          <MenuItem className='menu'value={2}>2</MenuItem>
          <MenuItem className='menu' value={3}>3</MenuItem>
          <MenuItem className='menu' value={4}>4</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
    <div className='info'>
    <p><span className='icon'><BsCheck2Circle/></span> Easy return policy</p>
    <p><span className='icon'><BsCheck2Circle/></span> Fast and safe delivery assured</p>
    </div>
          </div>
        </div>
      </div> 
    
       <div className='actionbutton'>
     <Button sx={{ color:'#ff3f6c',borderColor:'#ff3f6c'}} value={id} onClick={towishlist}  startIcon={<AiOutlineHeart/>} variant="outlined" >Move To Wishlist</Button>
     <Button sx={{ color:'#ff3f6c',borderColor:'#ff3f6c'}} value={id} onClick={remove} startIcon={<TiDeleteOutline/>} variant="outlined" >REMOVE</Button>
     </div>
   </div>
   
 </Cont>
  )
}
const Div=styled('div')(`
display:flex;
 justify-content:center;
 flex-direction:row;
 h1{
  color:#ff3f6c;
 }
 .container{
  display:flex;
  flex-direction:column;
 }


`)
const Bon = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  padding: '6px 12px',
   color:'white',
  lineHeight: 1.5,
  height:'3rem',
  width:'8rem',
  backgroundColor: '#ff3f6c',
  

  '&:hover': {
    backgroundColor: 'white',
    border:'1px solid #ff3f6c',
    boxShadow: 'none',
    color:'#ff3f6c',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#ff3f6c',
   
  },
  
});
export const Bag=()=>{
  const Bag=useSelector((store)=>store.Bag.bag);
  const amount=useSelector((store)=>store.Amount.amount);
  return (
    <Div>
      <div className="container">
      <h1>YOUR BAG</h1>
     
      { Bag.length>0? Bag.map((props)=><BagCard props={props}/>):<Box>
        <img src={empty} alt='Empty ' width="500"/>
        </Box>}
        </div>
        <Box sx={{ mt:'5rem',ml:'3rem'}}>
          <h1> Total:Rs. {amount}</h1>
          <Bon>BUY</Bon>
        </Box>
    
      
    </Div>
  )
}


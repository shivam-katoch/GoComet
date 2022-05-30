import React from 'react'
import { styled } from '@mui/material/styles';
import { useSelector,useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';
import {AiOutlineHeart} from 'react-icons/ai'
import wish from '../assets/image/wish.jpg';
import { setWish } from '../assets/store/wishSlice';
import { setBag } from '../assets/store/bagSlice';


const Cont=styled('div')(`
  
 
  margin:0.8rem;
  cursor: pointer;
  height:380px;
  width:232px;
.main{
    position:relative;
    height:380px;
    width:232px;
  
img{
        height:300px;
        width:232px;
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
        font-size: 0.75rem;
        margin:0;
        padding:0px 0 1px ;
     }
.oprice{
         text-decoration:line-through;
         padding-left:0.5rem;
     }
.discount{
         color:#ff3f6c;
         padding-left:0.5rem;
     }
  .actionbutton{
      display:flex;
      justify-content:space-between;
      padding-left:4px;
      padding-right:4px;
  }
     
 :hover{
        box-shadow: 1px 1px 10px 0.5px  #e9e9ed;
        
      }
    }
`)
export const Wishlist = ({props}) => {
    
    const {id,brandName,productName,price,originalPrice,images,discountPercent}=props;
    const wishProduct=useSelector((store)=>store.Wish.wish);
    const bagProduct=useSelector((store)=>store.Bag.bag);
    const dispatch=useDispatch();

  
    const addtobag=(ev)=>{
      dispatch(setBag([...bagProduct,props]));
      dispatch(setWish(wishProduct.filter((e)=>e.id!==ev.target.value)));
    }
    const remove=(ev)=>{
      dispatch(setWish(wishProduct.filter((e)=>e.id!==ev.target.value)));
    }
  return (
    <Cont>
         
    <div className='main'>
     <img src={images[0]} alt={brandName}/>
     <div className='content'>
     <p className='productname'>{productName}</p>
     <div className='pricetag'>
     <span className='price'>Rs. {price} </span>
     <span className='oprice'>Rs. {originalPrice}</span>
     <span className='discount'>{discountPercent}%</span>
     </div>
     </div> 
     <div className='actionbutton'>
     <Button value={id} onClick={addtobag} sx={{ color:'#ff3f6c',borderColor:'#ff3f6c'}} variant="outlined" >ADD TO BAG</Button>
     <Button value={id} onClick={remove} sx={{ color:'#ff3f6c',borderColor:'#ff3f6c'}} variant="outlined" >REMOVE</Button>
     </div>
   </div>
 </Cont>
  )
}

const Div=styled('div')(`
display:flex;
 justify-content:center;
 h1{
  color:#ff3f6c;
 }
 .container{
  display:flex;
  flex-direction:column;
 }


`)

export const Wishlistpage = () => {
  const wishProduct=useSelector((store)=>store.Wish.wish);
  return (
    <Div>
      <div className="container">
      <h1>YOUR WISHLIST <AiOutlineHeart/> </h1>
     
      { wishProduct.length>0? wishProduct.map((props)=><Wishlist props={props}/>):<Box>
        <img src={wish} alt='Empty Wishlist' width="500"/>
        </Box>}
    </div>
      
    </Div>
  )
}


import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineHeart} from 'react-icons/ai'
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { setWish } from '../assets/store/wishSlice';
const Cont=styled('div')(`
  
 
  margin:0.8rem;
  cursor: pointer;
  height:380px;
  width:232px;
.main{
    position:relative;
    height:380px;
    width:232px;
  }
img{
        height:300px;
        width:232px;
     }
.wishlist{
        width:182px;
        background-color:white;
        display:flex;
        padding:10px 0 0 50px;
        position:absolute;
        bottom:80px;
        visibility:hidden;
       }
       .nwish{
        width:182px;
        background-color:grey;
        display:flex;
        padding:10px 0 0 50px;
        position:absolute;
        bottom:80px;
        visibility:hidden;
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
        font-size: 0.75rem;
        margin:0;
        padding:7px 0 7px ;
     }
.oprice{
         text-decoration:line-through;
         padding-left:0.5rem;
     }
.discount{
         color:#ff3f6c;
         padding-left:0.5rem;
     }
     &:hover .wishlist{
        
        visibility: visible;
        transition: 0.2 ease
     }
   
     
 :hover{
        box-shadow: 1px 1px 10px 0.5px  #e9e9ed;
        
      }
     
        
    
     
  



    
`);
const Bon = styled(Button)({

  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  padding: '6px 12px',
  color:'#ff3f6c',
  border:'1px solid #ff3f6c',
  lineHeight: 1.5,
  height:'2rem',
  backgroundColor: 'white',
  

  '&:hover': {
   
    backgroundColor: '#ff3f6c',
    border:'1px solid white',
    boxShadow: 'none',
    color:'white',
   
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#ff3f6c',
   
  },


  
});
const Producttemplate = ({props}) => {
  const {id,brandName,productName,price,originalPrice,images,discountPercent}=props;
  const dispatch=useDispatch();
  const [wish,setwish]=useState(false);
  const wishProduct=useSelector((store)=>store.Wish.wish);
  const towishlist=(ev)=>{
    if(wish)
    {
      dispatch(setWish(wishProduct.filter((e)=>e.id!=ev.target.value)));
      setwish(false)
    }
    else{
      setwish(true)
      dispatch(setWish([...wishProduct,props]))

    }

  }
  return (
   
      <Cont>
      
         <div className='main'>
          <Link to={`/product-info/${id}`}>
          <img src={images[0]} alt={brandName}/>
          </Link>
          <div className={wish? 'nwish' : "wishlist"}>
          <Bon  value={id} onClick={towishlist} startIcon={<AiOutlineHeart/>}>Whishlist</Bon>
          </div>
        <div className='content'>
          <p className='brand'>{brandName}.</p>
          <p className='productname'>{productName}</p>
         
          <div className='pricetag'>
          <span className='price'>Rs. {price} </span>
          <span className='oprice'>Rs. {originalPrice}</span>
          <span className='discount'>{discountPercent}%</span>

          </div>
        </div> 
        </div> 
      </Cont>
     
  )
}

export default Producttemplate;

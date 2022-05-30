import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
import {RiWechatLine} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai';
import {IoBagHandleOutline} from 'react-icons/io5';
import { Button} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setWish } from '../assets/store/wishSlice';
import { setBag} from '../assets/store/bagSlice';

const Forcss=styled('div')(
  `
   margin:5rem 0 0 5rem;
   display:flex;
   flex-direction:row;
  .img-container{
    width:54vw;
    display:flex;
    flex-wrap:wrap;
    padding:10px;
    img{
      padding:10px;
      cursor:zoom-in;
      width:24vw;
    }
  }
  .product-info{
    width:25vw;
  }
  #brand{
    text-transform:uppercase;
    margin:0;
    font-weight: 600;
    font-size:2rem;
  }
#content{
    padding-left:0.5rem;
}
#price{
   font-weight: 600;
   font-size:1.25rem;
}
#productname{
  text-transform:uppercase;
  color:grey;
  font-size:1.25rem;
  margin:0;
  padding:7px 0 7px ;
}
#review{ 
  text-transform:uppercase;
   color:grey;
   font-size: 0.75rem;
  
  width:5rem;
  border:1px solid grey;
  border-radius:1rem;
  cursor:pointer;
  padding:4px;
  margin:4px;
}
#oprice{
    text-decoration:line-through;
    padding-left:0.5rem;
}
#discount{
    color:#ff3f6c;
    padding-left:0.5rem;
}
a{
  text-decoration:none;
  color:white;
}
.pricetag{
  p{
    color:green;
    padding:0;
    margin:0;
    padding-top:4px;
    font-size:.9rem;
    font-weight:600;
  }
}
#size{
  font-weight:600;
  color:#ff3f6c;
}
.size-group{
  padding:1rem;
  diplay:flex;
  

  .sizess{
    margin:5px;
    border:1px solid grey;
    color:grey;
    border-radius:49%;
    padding:1rem;
    cursor:pointer;
    :hover{
      color:#ff3f6c;
      border-color:#ff3f6c;
    }
    
   
  }
 
}
  `
)
const Bon = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  padding: '6px 12px',
   color:'white',
  lineHeight: 1.5,
  height:'3rem',
  backgroundColor: '#ff3f6c',
  textDecoration:'none',
  

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

const Productcard = () => {
 
    const {id}=useParams();
    const product=useSelector((store)=>store.Products.product).find((product)=>product.id === id);
    const {brandName,productName,price,originalPrice,images,discountPercent,numberOfReviews}=product;
    const dispatch=useDispatch();
 const wishProduct=useSelector((store)=>store.Wish.wish);
 const bag=useSelector((store)=>store.Bag.bag);
 
  const towishlist=(ev)=>{
   
      dispatch(setWish([...wishProduct,product].filter((v,a,i)=>a.indexOf(v) === i)))
      
    }
  const addtobag=(ev)=>{
    dispatch(setBag([...bag,product]));
  }
   const[size,setSize]=useState();
  return (
    <Forcss>
      <div className='img-container'>
      {images.map((e)=><img src={e} alt={brandName}/>)}
      </div>
      
      <div className='product-info'>
         <p id='brand'>{brandName}.</p>
          <p id='productname'>{productName}</p>
          <p id='review'><RiWechatLine id='review-icon'/>{numberOfReviews} Reviews</p>
         <Divider/>
          <div className='pricetag'>
          <span id='price'>Rs.{price} </span>
          <span id='oprice'>{originalPrice}</span>
          <span id='discount'> {discountPercent}% off</span>
          <p> inclusive of all taxes</p>
          </div>
          <div>
            <p id="size">Select Size</p>
            <div className="size-group">
              <span className="sizess" value={38} onClick={setSize}>38</span>
              <span className="sizess" value={40} onClick={setSize}>40</span>
              <span className="sizess" value={42} onClick={setSize}>42</span>
              <span className="sizess" value={44} onClick={setSize}>44</span>
            </div>
            <Divider sx={{m:'1rem'}}/>
            <div className="bt-grp">
            <Bon varient="contained" onClick={addtobag}><Link to='/bag'><IoBagHandleOutline/>ADD TO BAG</Link></Bon>
            <span>  </span>
            <Bon variant="contained" onClick={towishlist}  ><Link to='/wishlist'><AiOutlineHeart/>ADD TO WISHLIST</Link></Bon>
            </div>
          </div>
      </div>
    </Forcss>
  )
}

export default Productcard

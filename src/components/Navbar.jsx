import { styled } from '@mui/material/styles';
import {IoSearchOutline,IoBagHandleOutline} from 'react-icons/io5';
import {FaRegUser} from'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai'
import Myntra from '../assets/icons/Myntra.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTextFilter } from '../assets/store/filterSlice';
const Navdiv=styled('div')(
  `
  
  display: grid;
  height: 4.5rem;
  align-items: center;
  grid-template-columns: 7% 43% 36% 14%;
  padding-left: 4%;
  padding-right: 4%;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
  .logo {
    img {
     
      width: 3.2vw;
    
    }
  }
 .option{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    a {
      padding: 25px 17px;
      font-size: 0.9rem;
      font-weight: 700;
      text-decoration:none;
      color:#3e4152;
     
      &:hover {
        border-bottom:4px solid #ff3f6c;
        transition: 0.1s ease;
      }
    }
  }
  .sbar {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    .sbarIcon{
      position: absolute;
      left: 2%;
    }
    svg {
      width: 1.2vw;
      height: 2vh;
      color:grey;
      
    }
  .input {
    font-size: 14px;
    height: 16px;
    line-height: 24px;
    width: 85%;
    color: #696e79;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    padding: 8px 10px 10px;
    margin: 0;
    outline: 0;
    font-size: 12px;
    border: 1px solid #f5f5f6;
    border-radius:0.2rem;
    background: #f5f5f6;
    padding-left: 3vw;
    &:focus {
      background: white;
      border: 2px solid #f5f5f6;
      &::placeholder {
        opacity: 0;
      }
    }
  }
}
.right {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  color:#3e4152;
  svg {
    width: 16px;
    height: 16px;
    &:hover{
      color:#ff3f6c;
    }
  }
  .rightItems {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 32px;
    text-decoration:none;
    color:#3e4152;
    p {
      padding-top: 4px;
      font-size: 10px;
      font-weight: 600;
      margin: 0;
      
    }
    &:first-child {
      padding-left: 0;
    }
  }

  `
)

const Navbar = () => {
  const [search,setSearch]=useState('');
   const dispatch=useDispatch();
  return (
     <Navdiv>
        
      <Link to="/" className='logo'>
        <img src={Myntra} alt="Myntra" />
      </Link>
      <div className='option'>
        <Link to="/">MEN</Link>
        <Link to="/">WOMEN</Link>
        <Link to="/">KIDS</Link>
        <Link to="/">HOME & LIVING</Link>
        <Link to="/">BEAUTY</Link>
        <Link to="/">STUDIO</Link>
      </div>
      <div className='sbar'>
        <div className='sbarIcon'>
        <IoSearchOutline/>
        </div>
        <input
          type="text"
          className='input'
          placeholder="Search for products, brands and more"
          onChange={(event) => {
            setSearch(event.target.value);
            
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(setTextFilter(search));
            }}}
         
        />
      </div>

      <div className='right'>
        <div className='rightItems'>
          <FaRegUser/>
          <p>Profile</p>
        </div>
        <Link to="/wishlist" className='rightItems'>
          <AiOutlineHeart/>
          <p>Wishlist</p>
        </Link>
        <Link to="/bag" className='rightItems'>
          <IoBagHandleOutline/>
          <p>Bag</p>
        </Link>
      </div>
  
   </Navdiv>
  )
}

export default Navbar;

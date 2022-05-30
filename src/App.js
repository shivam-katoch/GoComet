
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route} from "react-router-dom";

import {Wishlistpage} from './components/Wishlist';
import  { Bag } from './components/BagCard';
import Productcard from './components/Productcard';
import Mainpage from './components/Mainpage';

function App() {
 
  return (
    <>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Mainpage/>} />
        <Route path="/product-info/:id" element={<Productcard/>} />
        <Route path="/wishlist" element={<Wishlistpage/>} />
        <Route path="/bag" element={<Bag/>} />
      </Routes>

    </>
  );
}

export default App;



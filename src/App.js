import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import {Route,Routes} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
import Wishlist from './components/Wishlist';


function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;

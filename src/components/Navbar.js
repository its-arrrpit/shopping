
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { BsHeartFill } from "react-icons/bs";

const Navbar = () => {
    const items=useSelector((state)=>(state.cart.items));
    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
    const wishlistItems = useSelector(state=>state.cart.wishlistItems);
    const navigate = useNavigate();
    return (
        <div className='bg-blue-900 fixed w-full top-0 z-50 backdrop-blur-sm shadow-sm'>
            <div className='flex justify-between text-2xl text-white max-w-4xl mx-auto items-center p-4'>
                <div onClick={()=>navigate("/")} className='uppercase font-bold font-serif cursor-pointer'>Arpit Mart</div>
                <div className='flex gap-6 items-center '>
                    <button onClick={()=>navigate("/")} className='text-xl'><IoHome/></button>
                    <div className='relative cursor-pointer' onClick={()=>navigate("/wishlist")}>
                        <button className='text-xl'><BsHeartFill/></button>
                        {wishlistItems.length > 0 && <div className='flex text-[15px] justify-center h-[15px] min-w-[15px] items-center font-bold bg-green-600 absolute rounded-full top-[1px] left-[11px] p-1'>{wishlistItems.length}</div>}
                    </div>
                    <div onClick={()=>navigate("/cart")} className='relative cursor-pointer'>
                        <FaShoppingCart className='text-xl'></FaShoppingCart>
                        {totalQuantity > 0 && <div className='flex text-[15px] justify-center h-[15px] min-w-[15px] items-center font-bold bg-green-600 absolute rounded-full -top-1 left-[13px] p-1'>{totalQuantity}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
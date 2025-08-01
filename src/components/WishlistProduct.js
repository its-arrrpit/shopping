

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addToCart, removeFromCart , wishlist } from '../redux/slices/cartSlice';
import "../index.css";
import { toast } from 'react-hot-toast';
import { FcLikePlaceholder , FcLike } from "react-icons/fc";

const Product = ({product}) => {
    const dispatch = useDispatch();
    const items=useSelector((state)=>(state.cart.items));
    // const isWishlisted = useSelector((state) =>
    //         state.cart.wishlistItems.some((i) => i.id === product.id));

    // function wishlistHandler(product) {
    //     dispatch(wishlist(product));
    //     {!isWishlisted ? toast("Item Wishlisted") : toast("Item Removed")}
    // }

    return (
        <div className='p-5 sm:deep-shadow flex flex-col sm:p-3 rounded-lg sm:hover:scale-110 transition-all duration-200 gap-2 shadow-lg'>
            <div className='relative'>
                <img className='h-[200px] max-w-[180px] aspect-square mx-auto' src={product.image}></img>
                {/* {isWishlisted ? <FcLike onClick={()=>wishlistHandler(product)} className=' transition-all duration-200 absolute -right-1 -bottom-[2px] cursor-pointer text-3xl bg-gray-50 rounded-full p-1'/> : <FcLikePlaceholder onClick={()=>wishlistHandler(product)} className='transition-all duration-200 absolute -right-1 -bottom-[2px] cursor-pointer text-3xl bg-gray-50 rounded-full p-1'/>} */}
                
            </div>
            <div className='truncate font-bold'>{product.title}</div>
            <div className='font-bold text-green-500'>${product.price}</div>
            <div className='line-clamp-3 text-sm text-gray-600'>{product.description}</div>
            <div className='flex justify-between text-sm gap-2'>
                <button className={`border ${items.some((item) => item.id === product.id) ? "w-[50%]" : "w-full"} h-[30px] text-xs items-center flex justify-center border-black border-2 font-bold p-1 rounded-2xl hover:bg-gray-600 hover:text-white transition-all duration-200`} onClick={()=>{dispatch(addToCart(product)); toast.success("Product added to Cart") }}>Add to Cart</button>
                {items.some((item) => item.id === product.id) && (
                    <button className='w-[50%] h-[30px] text-xs items-center flex justify-center border-black border-2 font-bold p-1 rounded-2xl hover:bg-gray-600 hover:text-white' onClick={()=> { dispatch(removeFromCart(product)); toast.error("Product removed from Cart") }}>Remove Item</button> )}

            </div>
        </div>
    )
}

export default Product;
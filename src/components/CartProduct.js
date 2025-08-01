import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart , wishlist } from '../redux/slices/cartSlice';
import toast from 'react-hot-toast';
import { FcLike , FcLikePlaceholder } from 'react-icons/fc';

const CartProduct = ({product}) => {
    const dispatch = useDispatch();
    const item = useSelector((state) =>
        state.cart.items.find((i) => i.id === product.id));

    const quantity = item ? item.quantity : 0;
    const isWishlisted = useSelector((state) =>
            state.cart.wishlistItems.some((i) => i.id === product.id));

    function wishlistHandler(product) {
        dispatch(wishlist(product));
        {!isWishlisted ? toast("Item Wishlisted") : toast("Item Removed from Wishlist")}
    }

    return (
        <div className='p-2 mt-8 flex flex-col justify-center items-center gap-2 bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-200'>
            <img className='h-[200px] aspect-square' src={product.image}></img>
            <div className='font-bold text-md'>{product.title}</div>
            <div className='flex gap-10'>
                <div className='text-green-600 font-bold'>${product.price}</div>
                <div className='font-semibold'>Quantity: {quantity}</div>
            </div>
            {/* <div>{product.description}</div> */}
            <div className='flex gap-10 items-center'>
                {isWishlisted ? <FcLike onClick={()=>wishlistHandler(product)} className=' transition-all duration-200 cursor-pointer text-3xl bg-gray-50 rounded-full p-1'/> : <FcLikePlaceholder onClick={()=>wishlistHandler(product)} className='bg-gray-200 transition-all duration-200  cursor-pointer text-3xl rounded-full p-1'/>}
                <button onClick={()=>dispatch(addToCart(product))} className=' h-[30px] text-sm w-[100px] overflow-hidden items-center flex justify-center border-black border-2 font-semibold p-1 rounded-2xl hover:bg-gray-600 hover:text-white'>Add More</button>
                <button className=' h-[30px] text-sm w-[100px] overflow-hidden items-center flex justify-center border-black border-2 font-semibold p-1 rounded-2xl hover:bg-gray-600 hover:text-white' onClick={()=> { dispatch(removeFromCart(product)); toast.error("Product removed from Cart") }}>Remove Item</button>
            </div>
        </div>
    )
}

export default CartProduct;
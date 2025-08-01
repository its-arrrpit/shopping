import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';

const Cart = () => {
    const items = useSelector((state)=>(state.cart.items));
    const totalPrice = items.reduce((acc, item) => acc + item.price*item.quantity, 0);
    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

    return totalQuantity > 0 ? (
  <div className='flex flex-col sm:flex-row mt-8 max-w-4xl mx-auto gap-3'>
    <div className='flex flex-col w-full sm:w-[50%]'>
      {items.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </div>
    <div className='flex top-16 flex-col justify-between p-6 shadow-md sticky mt-8 w-full sm:w-[50%] h-[calc(100vh-4.6rem)] rounded-2xl bg-gray-50'>
      <div>
        <div className='mt-3 text-3xl text-gray-800 font-bold'>YOUR CART</div>
        <div className='text-6xl font-extrabold'>SUMMARY</div>
      </div>
      <div className='gap-2 flex flex-col'>
        <div className='font-bold'>Total Items: {totalQuantity}</div>
        <div className='font-bold flex gap-1'>Total Price: <div className='font-extrabold'>${totalPrice}</div></div>
        <button className='flex bg-green-600 rounded-xl h-[40px] items-center text-2xl text-white font-bold justify-center w-full'>CHECKOUT</button>
      </div>
    </div>
  </div>
) : (
  <div className="text-center text-gray-500 py-20">
    <h2 className="text-2xl font-semibold">Your cart is empty</h2>
  </div>
);

}

export default Cart;
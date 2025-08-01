
import React from 'react'
import { useSelector } from 'react-redux'
import WishlistProduct from './Product';

const Wishlist = () => {
    const wishlistItems = useSelector(state=>state.cart.wishlistItems);
    return wishlistItems.length > 0 ? (
        <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto gap-5'>
            {wishlistItems.map((product)=> {
                return <WishlistProduct product={product}></WishlistProduct>
            })}
        </div>
    ) : (
        <div className="text-center text-gray-500 py-20">
            <h2 className="text-2xl font-semibold">Your wishlist is empty</h2>
        </div> );
}

export default Wishlist;
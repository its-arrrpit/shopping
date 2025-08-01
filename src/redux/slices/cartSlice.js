
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items:[],
    wishlistItems:[],
    quantity:0,
    wishlisted:false
  },
  reducers: {
    addToCart: (state, action) => {
    const existingItem = state.items.find(item => item.id === action.payload.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            state.items.push({ ...action.payload, quantity: 1 });
        }
    },
    removeFromCart: (state, action) => {
    const existingItem = state.items.find(item => item.id === action.payload.id);

        if (existingItem) {
            if (existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            }
        }
    },
    wishlist: (state , action) => {
        const item = { ...action.payload };

        const alreadyWishlisted = state.wishlistItems.find(i => i.id === item.id);

        if (!alreadyWishlisted) {
            item.wishlisted = true;
            state.wishlistItems.push(item);
        } else {
            state.wishlistItems = state.wishlistItems.filter((i) => i.id !== item.id);
        }
    }

}});

export const {addToCart,removeFromCart,wishlist} = cartSlice.actions;
export default cartSlice.reducer;
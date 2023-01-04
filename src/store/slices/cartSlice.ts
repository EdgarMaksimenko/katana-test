import { IProduct } from './productSlice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICartState {
  items: IProduct[];
  isOpened: boolean;
  total: number;
}

const initialState: ICartState = {
  items: [],
  isOpened: false,
  total: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state){
      state.isOpened = !state.isOpened;
      console.log(state.isOpened);
    },
    addToCart(state, action: PayloadAction<IProduct>){
      if(!state.items.find(item => item.id === action.payload.id)){
        state.items.push(action.payload);
        state.total += action.payload.price;
      }
    },
    removeFromCart(state, action: PayloadAction<string>){
      const removedItemIndex = state.items.findIndex(item => item.id === action.payload);
      state.total -= (state.items[removedItemIndex].price * state.items[removedItemIndex].count);
      state.items.splice(removedItemIndex, 1);
      
    },
    countPlus(state, action: PayloadAction<string>){
      const currentItem = state.items.find(item => item.id === action.payload);
      if(currentItem!.count < 50){
        currentItem!.count += 1;
        state.total += currentItem!.price;
      }
    },
    countMinus(state, action: PayloadAction<string>){
      const currentItem = state.items.find(item => item.id === action.payload);
      if(currentItem!.count > 1){
        currentItem!.count -= 1;
        state.total -= currentItem!.price;
      }
    },
  },
})

export const {toggleCart, addToCart, countPlus, countMinus, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
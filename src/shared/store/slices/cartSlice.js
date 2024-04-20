import { createSlice, createSelector } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      console.log('action ::', action);

      const { payload } = action;

      const isProductExist = state.findIndex((item) => item.id === payload.id);

      if (isProductExist >= 0) {
        return state.map((item) => {
          if (item.id === payload.id) {
            return { ...payload, qty: item.qty + 1 };
          }

          return item;
        });
      }

      return [...state, { ...payload, qty: 1 }];
    },
    removeFromCart: (state, action) => {
      const { payload } = action;

      const product = state.find((item) => item.id === payload.id);

      if (product && product.qty > 1) {
        return state.map((item) => {
          if (item.id === payload.id) {
            return { ...payload, qty: item.qty - 1 };
          }

          return item;
        });
      }

      const updatedCartItem = state.filter((item) => item.id !== payload.id);

      return updatedCartItem;
    }
  }
});

export const getCart = createSelector(
  (store) => store.cart,
  (cartSlice) => cartSlice
);

export const getCartItemsCount = createSelector(
  (store) => store.cart,
  (cartSlice) => cartSlice.length
);

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

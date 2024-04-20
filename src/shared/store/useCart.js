import { useContext } from 'react';
import { cartContext } from './CartProvider';

export function useCart() {
  return useContext(cartContext);
}

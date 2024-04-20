import { createContext, useReducer, useContext } from 'react';

export const cartContext = createContext(null);

const reducer = (state, payload) => {
  const { type, action } = payload;

  switch (type) {
    case 'ADD_TO_CART':
      return [...state, action];

    case 'REMOVE_FROM_CART': {
      const { id } = action;
      return state.filter((item) => item.id !== id);
    }

    default:
      break;
  }
};

export function CartProvider({ children }) {
  const [cart, dispatchCart] = useReducer(reducer, []);

  return <cartContext.Provider value={{ cart, dispatchCart }}>{children}</cartContext.Provider>;
}

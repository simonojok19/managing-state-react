import React, { useEffect, useReducer } from "react";
import cartReducer from "./cartReducer";

export const CartContext = React.createContext(null);
const getInitialCart = () => {
  try {
    return JSON.parse(localStorage.getItem("cart")) ?? [];
  } catch (e) {
    return [];
  }
};

export default function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, getInitialCart());

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

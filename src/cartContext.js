import React, { useContext, useEffect, useReducer } from "react";
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

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "useCart must be used within a CartProvider, Wrap the App component in <CartContextProvider>"
    );
  }
  return context;
}

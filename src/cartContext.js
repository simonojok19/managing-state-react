import React from "react";

export const CartContext = React.createContext(null);

export default function CartContextProvider({ children, value }) {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

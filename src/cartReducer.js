export const ACTION_TYPE = {
  EMPTY_CART: "EMPTY_CART",
  ADD_TO_CART: "ADD_TO_CART",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
};

export default function cartReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.EMPTY_CART: {
      return [];
    }
    case ACTION_TYPE.ADD_TO_CART: {
      const { id, sku } = action;
      const itemInCart = state.find((i) => i.sku === sku);
      if (itemInCart) {
        return state.map((i) =>
          i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...state, { id, sku, quantity: 1 }];
    }
    case ACTION_TYPE.UPDATE_QUANTITY: {
      const { sku, quantity } = action;
      return quantity === 0
        ? state.filter((item) => item.sku !== sku)
        : state.map((item) =>
            item.sku === sku ? { ...item, quantity } : item
          );
    }
    default: {
      throw new Error("Unsupported action " + action.type);
    }
  }
}

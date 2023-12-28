import { createContext, useContext, useReducer } from "react";

import { someProducts } from "../helpers/helpers.js";

const CartContext = createContext();

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        checkout: false,
        ...someProducts(state.selectedItems),
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...someProducts(newSelectedItems),
      };
    case "INCREASE":
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.selectedItems[increaseIndex].quantity++;
      return {
        ...state,
        ...someProducts(state.selectedItems),
      };
    case "DECREASE":
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.selectedItems[decreaseIndex].quantity--;
      return {
        ...state,
        ...someProducts(state.selectedItems),
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    default:
      throw new Error("Invalid action");
  }
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCard = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export { useCard };

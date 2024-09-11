import { configureStore } from "@reduxjs/toolkit";
import useSlice from "../feature/useSlice";
import cartSlice from "../feature/cartSlice";
import orderSlice from "../feature/orderSlice";

export const store = configureStore({
  reducer: {
    useSlice,
    cartSlice,
    orderSlice
  },
});
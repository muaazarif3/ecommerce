import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {
    orders: [],
  },
  reducers: {
    addToOrders: (state, action) => {
      state.orders = [...state.orders, ...action.payload];
    },
  },
});

export const { addToOrders } = orderSlice.actions;
export default orderSlice.reducer;

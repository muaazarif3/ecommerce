import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let URL ="https://makeup-api.herokuapp.com/api/v1/products.json?product_category=mineral&product_type=foundation";

export let userData = createAsyncThunk("user", async () => {
  let response = await fetch(URL);
  let data = await response.json();
  

  try {
    return data;
  } catch (error) {
    console.log(error);
  }
});

let pending = createAction(userData.pending);
let fullFilled = createAction(userData.fulfilled);
let rejected = createAction(userData.rejected);

let useSlice = createSlice({
  name: "user Slice",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(pending, (state, action) => {
        state.loading = true
      })
      .addCase(fullFilled, (state, action) => {
        state.data = action.payload;
        state.loading = false 
      })
      .addCase(rejected, (state, action) => {
        state.loading = false ;
        state.error = action.payload;
      });
  },
});
export default useSlice.reducer;

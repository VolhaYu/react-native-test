import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Data, baseUrl } from '../../api/api';

interface State {
  orders: Data[];
}

const initialState: State = {
  orders: [],
};

export const getOrders = createAsyncThunk('orders/getOrders', async (_, { dispatch }) => {
  const res = await fetch(`${baseUrl}`);
  const data: Data[] = await res.json();
  console.log(data);
  dispatch(setOrders(data));
});

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
  // extraReducers: {
  //   [getOrders.pending.type]: () => console.log('pending'),
  //   [getOrders.fulfilled.type]: () => console.log('fulfilled'),
  //   [getOrders.rejected.type]: () => console.log('rejected'),
  // }
});

export const { setOrders } = orderSlice.actions;
export default orderSlice.reducer;

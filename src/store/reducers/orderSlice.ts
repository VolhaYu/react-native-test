import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Data, baseUrl } from '../../api/api';

interface State {
  orders: Data[];
  isLoading: boolean;
  error: string;
}
interface Put {
  id: number;
  body: {
    grade: number | undefined;
    feedback: string[];
  };
}

const initialState: State = {
  orders: [],
  isLoading: false,
  error: '',
};

export const getOrders = createAsyncThunk('orders/getOrders', async (_, thunkApi) => {
  try {
    const res = await fetch(`${baseUrl}`);
    const data: Data[] = await res.json();
    if (!res.ok) {
      throw Error();
    }
    return data;
  } catch (e) {
    return thunkApi.rejectWithValue('error!!!!');
  }
});

export const putFeedback = createAsyncThunk(
  'orders/putFeedback',
  async ({ id, body }: Put, thunkApi) => {
    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue('error!!!!');
    }
  }
);

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled.type, (state, action: PayloadAction<Data[]>) => {
      state.isLoading = false;
      state.error = '';
      state.orders = action.payload;
    });
    builder.addCase(getOrders.pending.type, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOrders.rejected.type, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(putFeedback.fulfilled.type, (state, action: PayloadAction<Data>) => {
      const { id } = action.payload;
      const data = state.orders;
      const index = data.findIndex((item) => id === item.id);
      data.splice(index, 1, action.payload);
    });
  },
});

export default orderSlice.reducer;

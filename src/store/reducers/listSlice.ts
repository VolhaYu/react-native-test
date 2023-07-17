import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Criteria, criteriaUrl } from '../../api/api';

interface ListState {
  list: Criteria[];
  feedback: string[];
  isLoading: boolean;
  error: string;
}

const initialState: ListState = {
  list: [],
  feedback: [],
  isLoading: false,
  error: '',
};

export const getList = createAsyncThunk('list/getList', async (_, thunkApi) => {
  try {
    const res = await fetch(`${criteriaUrl}`);
    const data: Criteria[] = await res.json();
    if (!res.ok) {
      throw Error();
    }
    return data;
  } catch (e) {
    return thunkApi.rejectWithValue('error!!!!');
  }
});

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setFeedback: (state, action) => {
      state.feedback.push(action.payload);
    },
    clearFeedback: (state) => {
      state.feedback = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getList.fulfilled.type, (state, action: PayloadAction<Criteria[]>) => {
      state.isLoading = false;
      state.error = '';
      state.list = action.payload;
    });
    builder.addCase(getList.pending.type, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getList.rejected.type, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { setFeedback, clearFeedback } = listSlice.actions;
export default listSlice.reducer;

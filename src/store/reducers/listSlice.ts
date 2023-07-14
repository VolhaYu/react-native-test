import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Criteria, criteriaUrl } from '../../api/api';

interface ListState {
  list: Criteria[];
}

const initialState: ListState = {
  list: [],
};

export const getList = createAsyncThunk(
  'list/getList', async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await fetch(`${criteriaUrl}`);
      const data: Criteria[] = await res.json();
      console.log(data);
      dispatch(setList(data));
    } catch (e: any) {
      console.error(e.message);
    }
  }
);

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { setList } = listSlice.actions;
export default listSlice.reducer;

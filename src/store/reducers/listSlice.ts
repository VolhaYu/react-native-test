import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Criteria, criteriaUrl } from '../../api/api';

interface ListState {
  list: Criteria[];
  feedback: string[];
}

const initialState: ListState = {
  list: [],
  feedback: [],
};

export const getList = createAsyncThunk('list/getList', async (_, { dispatch }) => {
  try {
    const res = await fetch(`${criteriaUrl}`);
    const data: Criteria[] = await res.json();
    dispatch(setList(data));
  } catch (e) {
    console.error(e);
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
    setList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setList, setFeedback, clearFeedback } = listSlice.actions;
export default listSlice.reducer;

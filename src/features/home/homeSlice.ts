import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Course } from '../../models';
import { alertService, courseService } from '../../services';

export const fetchCourses = createAsyncThunk<Course[], void, { state: { home: HomeState }; rejectValue: string }>(
  'home/fetchCources',
  async (_, thunkApi) => {
    try {
      return courseService.getCourses();
    } catch (e: any) {
      alertService.showError(e);
      return thunkApi.rejectWithValue(e.toString());
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState().home;
      return !state.isLoading;
    },
  },
);

export interface HomeState {
  isLoading: boolean;
  data: Course[];
  error?: string;
}

const initialState: HomeState = {
  isLoading: false,
  data: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchCourses.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = undefined;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export default homeSlice.reducer;

/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Course } from '../../models';
import { alertService, courseService } from '../../services';

export const fetchCourse = createAsyncThunk<Course, string, { state: { course: CourseState }; rejectValue: string }>(
  'course/fetchCource',
  async (id, thunkApi) => {
    try {
      return courseService.getCourse(id);
    } catch (e: any) {
      alertService.showError(e);
      return thunkApi.rejectWithValue(e.toString());
    }
  },
  {
    condition: (id, thunkApi) => {
      const state = thunkApi.getState().course;
      return !state.isLoading;
    },
  },
);

export interface CourseState {
  isLoading: boolean;
  data?: Course;
  error?: string;
}

const initialState: CourseState = {
  isLoading: false,
};

const homeSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchCourse.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCourse.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = undefined;
      })
      .addCase(fetchCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export default homeSlice.reducer;

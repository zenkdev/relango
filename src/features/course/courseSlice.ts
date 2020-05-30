/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { Course } from '../../models';
import { alertService, courseService } from '../../services';

const { getCourse } = courseService;

export type CourseState = {
  isLoading: boolean;
  data: Course | null;
  error: string | null;
};

const initialState: CourseState = {
  isLoading: false,
  data: null,
  error: null,
};

const homeSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    getCourseStart(state: CourseState) {
      state.isLoading = true;
    },
    getCourseSuccess(state: CourseState, { payload }: PayloadAction<Course>) {
      state.data = payload;
      state.isLoading = false;
      state.error = null;
    },
    getCourseFailure(state: CourseState, { payload }: PayloadAction<string>) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { getCourseStart, getCourseSuccess, getCourseFailure } = homeSlice.actions;

export default homeSlice.reducer;

export const fetchCourse = (id: string): AppThunk => async dispatch => {
  try {
    dispatch(getCourseStart());
    const cource = await getCourse(id);
    dispatch(getCourseSuccess(cource));
  } catch (e) {
    alertService.showError(e);
    dispatch(getCourseFailure(e.toString()));
  }
};

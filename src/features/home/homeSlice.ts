/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { Course } from '../../models';
import { courseService, alertService } from '../../services';

const { getCourses } = courseService;

export type HomeState = {
  isLoading: boolean;
  data: Course[];
  error: string | null;
};

const initialState: HomeState = {
  isLoading: false,
  data: [],
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getCoursesStart(state: HomeState) {
      state.isLoading = true;
    },
    getCoursesSuccess(state: HomeState, { payload }: PayloadAction<Course[]>) {
      state.data = payload;
      state.isLoading = false;
      state.error = null;
    },
    getCoursesFailure(state: HomeState, { payload }: PayloadAction<string>) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { getCoursesStart, getCoursesSuccess, getCoursesFailure } = homeSlice.actions;

export default homeSlice.reducer;

export const fetchCourses = (): AppThunk => async dispatch => {
  try {
    dispatch(getCoursesStart());
    const cources = await getCourses();
    dispatch(getCoursesSuccess(cources));
  } catch (e) {
    alertService.showError(e);
    dispatch(getCoursesFailure(e.toString()));
  }
};

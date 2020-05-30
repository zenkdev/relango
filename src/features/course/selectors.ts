/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/rootReducer';
import { Lesson } from '../../models';

const selectCourse = (state: RootState) => state.course;

export const selectLessons = createSelector(selectCourse, ({ data }): Lesson[] => {
  if (!data) {
    return [];
  }

  const lessons = Object.values(data.lessons);
  return lessons;
});

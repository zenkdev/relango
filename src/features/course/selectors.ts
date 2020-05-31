import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/rootReducer';
import { Lesson } from '../../models';

const selectCourse = (state: RootState) => state.course;

const selectLesson = (state: RootState, lessonId?: string): (Lesson & { prev?: string; next?: string }) | null => {
  const {
    course: { data },
  } = state;
  if (!data || !lessonId) {
    return null;
  }

  const { id: courseId, lessons } = data;
  const lesson = lessons[lessonId];
  const keys = Object.keys(lessons);
  const ind = keys.indexOf(lessonId);
  const prev = ind > 0 ? `/course/${courseId}/lesson/${keys[ind - 1]}` : undefined;
  const next = ind >= 0 && ind < keys.length - 1 ? `/course/${courseId}/lesson/${keys[ind + 1]}` : undefined;

  return {
    ...lesson,
    prev,
    next,
  };
};

export const selectLessons = createSelector(selectCourse, ({ data }): Lesson[] => {
  if (!data) {
    return [];
  }

  const lessons = Object.values(data.lessons);
  return lessons;
});

export const selectCurrentLesson = createSelector(selectLesson, lesson => lesson);

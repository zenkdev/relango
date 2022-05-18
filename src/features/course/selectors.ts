import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { Module } from '../../models';

const selectCourse = (state: RootState) => state.course;

const selectModule = (state: RootState, moduleId?: string): (Module & { prev?: string; next?: string }) | null => {
  const {
    course: { data },
  } = state;
  if (!data || !moduleId) {
    return null;
  }

  const { id: courseId, modules } = data;
  const module = modules[moduleId];
  const keys = Object.keys(modules);
  const ind = keys.indexOf(moduleId);
  const prev = ind > 0 ? `/course/${courseId}/module/${keys[ind - 1]}` : undefined;
  const next = ind >= 0 && ind < keys.length - 1 ? `/course/${courseId}/module/${keys[ind + 1]}` : undefined;

  return {
    ...module,
    prev,
    next,
  };
};

export const selectModules = createSelector(selectCourse, ({ data }): Module[] => {
  if (!data) {
    return [];
  }

  const modules = Object.values(data.modules);
  return modules;
});

export const selectCurrentModule = createSelector(selectModule, x => x);

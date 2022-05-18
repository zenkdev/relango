import { configureStore } from '@reduxjs/toolkit';

import courseReducer from '../features/course/courseSlice';
import homeReducer from '../features/home/homeSlice';

const store = configureStore({
  reducer: {
    course: courseReducer,
    home: homeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

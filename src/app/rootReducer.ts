import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import courseReducer from '../features/course/courseSlice';
import homeReducer from '../features/home/homeSlice';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    course: courseReducer,
    home: homeReducer,
  });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;

export default createRootReducer;

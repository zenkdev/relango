import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import homeReducer from '../features/home/homeSlice';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    home: homeReducer,
  });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;

export default createRootReducer;

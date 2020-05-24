import { createBrowserHistory } from 'history';
/* eslint-disable import/no-extraneous-dependencies */
import { ThunkAction } from 'redux-thunk';

import { Action, configureStore } from '@reduxjs/toolkit';

import createRootReducer, { RootState } from './rootReducer';

export const history = createBrowserHistory();

const store = configureStore({
  reducer: createRootReducer(history),
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    // eslint-disable-next-line global-require
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;

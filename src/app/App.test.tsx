import React from 'react';
import { Provider } from 'react-redux';

import { render, screen, waitFor } from '@testing-library/react';

import App from './App';
import store from './store';

test('renders learn react link', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  await waitFor(() => {
    const linkElement = screen.getByText(/Ant Design version/i);
    expect(linkElement).toBeInTheDocument();
  });
  await waitFor(() => {
    const linkElement = screen.getByText(/Macmillan Exam Skills For Russia: Grammar and Vocabulary/i);
    expect(linkElement).toBeInTheDocument();
  });
});

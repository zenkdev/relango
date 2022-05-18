import './App.less';

import { BrowserRouter } from 'react-router-dom';

import Alerts from '../features/alerts/Alerts';
import PageLayout from './PageLayout';

function App() {
  return (
    <BrowserRouter>
      <PageLayout />
      <Alerts />
    </BrowserRouter>
  );
}

export default App;

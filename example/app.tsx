import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './config/route';
import { routes } from './config/routes';
import './app.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RouterComponent routes={routes} />
    </BrowserRouter>
  )
}

export default App;
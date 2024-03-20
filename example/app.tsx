import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import RouterComponent from './config/route';
import store from './store';
import { routes } from './config/routes';
import './app.scss';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterComponent routes={routes} />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
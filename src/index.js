import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './config/store.config';
import './index.css';
import Routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);

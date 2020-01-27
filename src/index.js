import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducers/store';
import App from './components/container/App.jsx';
import 'rxjs';

window.store = store;

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  wrapper,
) : false;

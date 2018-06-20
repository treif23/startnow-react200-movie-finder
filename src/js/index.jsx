import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './rootReducer';
import App from './app';
import store from './rootStore';

/* eslint-disable no-underscore-dangle */
// moving below to rootStore**************
// const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(
//       promiseMiddleware()
//     )
//   ));
/* eslint-enable */ 


render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
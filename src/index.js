import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reducers from './reducers'
import middleware from './middleware'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import LoadingBar from 'react-redux-loading-bar'

const store = createStore(
  reducers,
  middleware
)

ReactDOM.render(
  <Provider store={store}>
    <LoadingBar />
    <App />
  </Provider>,
  document.getElementById('root')
);


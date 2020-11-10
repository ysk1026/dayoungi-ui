import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from ''
import ReduxThunk from 'redux-thunk'
import history from './history'
import logger from 'redux-logger'
import rootReducer from './modules'


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({history:history}),
      logger
    )
  )
)

ReactDOM.render(
  <Router history={history}>
    <Provider store = {store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from 'react-dom';
import { Route } from 'react-router';
//import 'semantic/semantic-ui-css/semantic.css'
import App from './mainLayout/App';
//import * as serviceWorker from './serviceWorker';

import {  Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'

//ReactDOM.render(<App />, document.getElementById('root'));
import { authReducers } from "./reducers"
const history = createHistory()

const allReducers = {
  routerReducer,
  authReducers,
}

const store = createStore(
  combineReducers(allReducers),
  applyMiddleware(routerMiddleware(history)),
)

render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();


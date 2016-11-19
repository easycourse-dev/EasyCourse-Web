import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Public from './jsx/public'
import Home from './jsx/home'
import SignIn from './jsx/signin'
import store, { history } from './jsx/redux/store'
import { Router, Route, IndexRoute } from 'react-router';
import './index.css';

function getHomeComponent() {
  if (localStorage.getItem('authToken')) {
    store.dispatch({
      type: 'USER_AUTHENTICATE_SUCCESS'
    });

    return (<Home />);
  }
  return (<Public />);
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
        <IndexRoute component={getHomeComponent} />
        <Route path="signin" component={SignIn} />
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

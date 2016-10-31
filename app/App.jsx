import React, { Component, PropTypes as PT } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware, { Provider } from 'react-redux';
import { Public, Signup, Login, Home } from 'jsx';
import { NavBar, Footer } from 'components';
import store, { history } from './jsx/redux/store.js'
import rootReducer from 'jsx/redux/reducers';
import { Router, Route } from 'react-router';
import './css/index.css'; // Importing all the CSS files



class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        {/* <Public /> */}
        <Login />
        {/* <Signup /> */}
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

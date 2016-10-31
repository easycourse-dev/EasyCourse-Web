import React, { Component, PropTypes as PT } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware, { Provider } from 'react-redux';
import { Public, Home } from 'jsx';
import { NavBar, Footer } from 'components';
import rootReducer from 'jsx/redux/reducers';
// import thunkMiddleware from 'redux-thunk';
// import api from './utils/api';
import './css/index.css'; // Importing all the CSS files

// let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);
// let store = createStoreWithMiddleware(rootReducer);


class App extends Component {
  // static propTypes = {
  //   isLoggedIn: PT.bool.isRequired
  // };

  render() {
    return (
      <div>
        <NavBar />
        <Public />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <App />
  ,
  document.getElementById('root')
);

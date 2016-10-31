import React, { Component, PropTypes as PT } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware, { Provider } from 'react-redux';
import { Public, Home } from 'jsx';
import { NavBar, Footer } from 'components';
import rootReducer from 'jsx/redux/reducers';
import './css/index.css'; // Importing all the CSS files



class App extends Component {

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
  <App />
  ,
  document.getElementById('root')
);

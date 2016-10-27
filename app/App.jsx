import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  Router,
  Route
} from 'react-router';
import { Public, Home } from 'jsx';
import { NavBar, Footer } from 'components';
import './css/index.css'; // Importing all the CSS files
import store, { history } from './jsx/redux/Store.js'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* Commented out temporarily for iOS release */}
        {/* {this.props.isLoggedIn ?
          <Home />
          :
          <Public />
        } */}
        <Public />

        <Footer />
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

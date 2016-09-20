import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware, { Provider } from 'react-redux';
import { Public, Home } from './jsx';
import { NavBar } from './jsx/components';
import rootReducer from './jsx/redux/reducers';
import './css/index.css'; // Importing all the CSS files


let store = createStore(rootReducer);

class App extends Component {
  // TODO
  isLoggedIn() {
    return false;
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.isLoggedIn() ?
          <Home />
          :
          <Public />
        }
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

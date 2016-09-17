import React, { Component } from 'react';
import { Public, Home } from './jsx';
import { NavBar } from './jsx/components';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

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

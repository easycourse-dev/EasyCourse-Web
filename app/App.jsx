import React, { Component } from 'react';
import { Public, Home } from './jsx';

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
        {this.isLoggedIn() ?
          <Home />
          :
          <Public />
        }
      </div>
    );
  }
}

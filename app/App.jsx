import React, { Component } from 'react';
import { Home } from './jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

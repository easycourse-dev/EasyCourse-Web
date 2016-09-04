import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="app">
          bar
        </div>
        <Jumbotron>
          <h1>
            Well...
          </h1>
        </Jumbotron>
      </div>
    );
  }
}

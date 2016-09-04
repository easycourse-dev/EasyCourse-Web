import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Row>
          <Col sm={12} md={8} mdOffset={2} lg={8} lgOffset={2}>
            <Jumbotron>
              <h1>
                Under Construction...
              </h1>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    );
  }
}

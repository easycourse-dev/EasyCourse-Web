import React, { Component } from 'react';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap';
import { logout } from './redux/actions/user';

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
              <Button bsStyle="danger" onClick={() => logout()}>Log Out</Button>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    );
  }
}
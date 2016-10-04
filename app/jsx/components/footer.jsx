import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="container">
          <Row>
            <Col lg={8} md={10} lgOffset={2} mdOffset={1}>
              <p className="FooterText">
                @2016 EasyCourse Inc.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

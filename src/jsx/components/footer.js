import React, { Component } from 'react';
import { Row, Col, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="container">
          <Row>
            <Col lg={8} md={10} lgOffset={2} mdOffset={1}>
              <p className="FooterText">
                @2016 Colevate Inc.
              </p>
              <LinkContainer to="/docs">
                <NavItem className="TermsPricacyLink">Terms and privacy</NavItem>
              </LinkContainer>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

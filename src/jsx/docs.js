import React, { Component } from 'react';
import { Row, Col, NavItem } from 'react-bootstrap';
import Footer from './components/footer';
import { LinkContainer } from 'react-router-bootstrap';
import { Router } from 'react-router';

export default class Docs extends Component {

  render() {
    return (
      <div className="Docs SignInBackground">
        <div className="container">
          <Row className="DocsRow">
            <Col lg={4} lgOffset={4} md={6} mdOffset={3} sm={8} smOffset={2}>
              <div className="DocsHolder">
                <h2 className="PageTitle">
                  Documentations
                </h2>
                <div className="DocsCardsHolder">
                  <LinkContainer className="DocsCard" to="docs/terms" onClick={() => {}}>
                    <NavItem className="DocsCardTitle">Terms</NavItem>
                  </LinkContainer>
                  {/* <div className="DocsCard" onClick={() => {window.open("docs/terms",'_self',false)}}>
                    <a action="push" className="DocsCardTitle" href="docs/terms">Terms</a>
                  </div> */}
                  <div className="DocsCard" onClick={() => {window.open("docs/privacy",'_self',false)}}>
                    <a action="push" className="DocsCardTitle" href="docs/privacy">Privacy</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="FooterWrapper">
          <Footer />
        </div>
      </div>
    );
  }
}

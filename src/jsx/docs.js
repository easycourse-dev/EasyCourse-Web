import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router'
import Footer from './components/footer';

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
                  <div className="DocsCard">
                    {/* <a className="DocsCardTitle" href="docs/terms">Terms</a> */}
                    <Link to='terms' className="DocsCardTitle">Terms</Link>
                  </div>

                  <div className="DocsCard">
                    <Link to='privacy' className="DocsCardTitle">Privacy</Link>
                    {/* <a className="DocsCardTitle" href="docs/privacy">Privacy</a> */}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {this.props.children}
        </div>
        <div className="FooterWrapper">
          <Footer />
        </div>
      </div>
    );
  }
}

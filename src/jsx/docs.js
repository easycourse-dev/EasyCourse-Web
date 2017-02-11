import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Footer from './components/footer';
import NavBar from './components/navBar';
import { withRouter } from 'react-router';

class Docs extends Component {

  render() {
    return (
      <div className="Docs SignInBackground">
        <NavBar />
        <div className="container">
          <Row className="DocsRow">
            <Col lg={4} lgOffset={4} md={6} mdOffset={3} sm={8} smOffset={2}>
              <div className="DocsHolder">
                <h2 className="PageTitle">
                  Documentations
                </h2>
                <div className="DocsCardsHolder">
                  <div className="DocsCard" onClick={() => this.props.router.push('/docs/terms')}>
                    <a action="push" className="DocsCardTitle" href="/terms">Terms</a>
                  </div>
                  <div className="DocsCard" onClick={() => this.props.router.push('/docs/privacy')}>
                    <a action="push" className="DocsCardTitle" href="/privacy">Privacy</a>
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

export default withRouter(Docs)

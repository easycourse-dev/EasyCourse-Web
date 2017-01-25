import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router'
import Footer from './components/footer'
import NavBar from './components/navBar'

class Docs extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <NavBar />
        <div className="Docs SignInBackground">
          <div className="container">
            <Row className="DocsRow">
              <Col lg={4} lgOffset={4} md={6} mdOffset={3} sm={8} smOffset={2}>
                <div className="DocsHolder">
                  <h2 className="PageTitle">
                    Documentations
                  </h2>
                  <div className="DocsCardsHolder">
                    <div className="DocsCard" onClick={() => this.props.router.push('/terms')}>
                      <a className="DocsCardTitle">Terms</a>
                    </div>
                    <div className="DocsCard" onClick={() => this.props.router.push('/privacy')}>
                      <a className="DocsCardTitle">Privacy</a>
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
      </div>
    );
  }
}

export default withRouter(Docs)

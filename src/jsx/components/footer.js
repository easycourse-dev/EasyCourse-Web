import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="container">
          <Row>
            <Col lg={8} md={10} lgOffset={2} mdOffset={1}>
              <p className="FooterText">
                @2016 Colevate Inc.
              </p>
              <a
                className="TermsPricacyLink"
                onClick={() => this.props.router.push('/docs')}
              >Terms and privacy</a>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer)

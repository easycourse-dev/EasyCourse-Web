import React, { Component, PropTypes as PT } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class PublicSection extends Component {
  static propTypes = {
    style: PT.string

  }

  render() {
    return (
      <div className="PublicSection">
        <Row>
          <div className="container">

          </div>
        </Row>
      </div>
    );
  }
}

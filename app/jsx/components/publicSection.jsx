import React, { Component, PropTypes as PT } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class PublicSection extends Component {
  static propTypes = {
    PicOnLeft: PT.bool,
    title: PT.string,
    subtitle: PT.string,
    desc: PT.string,
    img: PT.string
  }

  render() {
    return (
      <div className="PublicSection">
        <div className="container">
          <Row>
            <Col lg={8} md={10} lgOffset={2} mdOffset={1} sm={12}>
              {this.props.PicOnLeft ?
                <h3>title</h3>
              :
                <div className={`PublicSectionImage ${this.props.img}`} />
              }
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

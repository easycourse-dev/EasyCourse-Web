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

  pictureComponent() {
    return (
      <Col lg={6} md={6} sm={12}>
        <div className={`PublicSectionImage ${this.props.img}`} />
      </Col>
    );
  }

  textsComponent() {
    return (
      <Col lg={6} md={6} sm={12}>
        <div className="TextsWrapper">
          <h5 style={{textAlign: 'center'}}>{this.props.title}</h5>
          <h2>{this.props.subtitle}</h2>
          <p>{this.props.desc}</p>
        </div>
      </Col>
    );
  }

  render() {
    return (
      <div className="PublicSection">
        <div className="container">
          <Row>
            <Col lg={8} md={10} lgOffset={2} mdOffset={1} sm={12}>
              {this.props.PicOnLeft ?
                <div>
                  {this.pictureComponent()}
                  {this.textsComponent()}
                </div>
              :
              <div>
                {this.textsComponent()}
                {this.pictureComponent()}
              </div>
              }
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

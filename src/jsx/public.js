import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PublicSection from './components/publicSection';
import Footer from './components/footer';

export default class Public extends Component {

  render() {
    return (
      <ReactCSSTransitionGroup
      transitionName={ {
        enter: 'FadeIn-enter',
        enterActive: 'FadeIn-enterActive',
        leave: 'FadeIn-leave',
        leaveActive: 'FadeIn-leaveActive',
        appear: 'FadeIn-appear',
        appearActive: 'FadeIn-appearActive'
      } }
      transitionEnterTimeout={500}
      transitionEnter
      transitionLeaveTimeout={500}
      transitionLeave
      transitionAppearTimeout={500}
      transitionAppear>
        <Row className="Public" key="publicPage">
          {/* Top banner with background image */}
          <div className="Banner">
            <div className="Banner">
              <div className="container">
                <Col className="SloganWrapper" lg={4} lgOffset={2} md={5} mdOffset={1} sm={12}>
                  <h1 className="Slogan">EasyCourse</h1>
                  <h3 className="SubSlogan">Connect with students</h3>
                  <h3 className="SubSlogan">Boost learning efficiency</h3>
                  <a className="StoreLinks" href="https://itunes.apple.com/us/app/easycourse-chatroom-designed/id1157252902?ls=1&mt=8" target="_blank">
                    <div className="AppStore" />
                  </a>
                  <p style={{ color: 'white', marginTop: 10}}>Android Coming Soon!</p>
                  {/* <a className="StoreLinks" href="http://play.google.com" target="_blank">
                    <div className="GooglePlay" />
                  </a> */}
                </Col>
                <Col lg={4} md={5} sm={12}>
                  <div className="PublicPhonesWrapper">
                    <div className="PublicPhones2" />
                    <div className="PublicPhones1" />
                  </div>
                </Col>
              </div>
            </div>
          </div>

          <PublicSection
            PicOnLeft
            title="CLASSES"
            subtitle="Join course groups"
            desc="Search for courses at your university and instantly start engaging with classmates."
            img="ClassesImage" />
          <PublicSection
            title="CHAT"
            subtitle="Collaborate with classmates"
            desc="Chat with your classmates for homework problems, group projects, and laughter."
            img="TextsImage" />
          <PublicSection
            PicOnLeft
            title="LANGUAGES"
            subtitle="Language specific course rooms"
            desc="Feel more comfortable expressing your ideas with students who speak your language."
            img="LanguageImage" />
          {/* extra space for footer */}
          <div style={{marginTop: '50px'}} />
        </Row>
        <Footer />
      </ReactCSSTransitionGroup>
    );
  }
}

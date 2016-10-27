import React, { Component, PropTypes as PT } from 'react';
import { Navbar, Nav, NavItem, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class NavBar extends Component {

  // static propTypes = {
  //   user: PT.Object
  // }

  render() {
    return (
      <Navbar className="Navbar">
      {/* {this.props}
        <p>{this.props.user ?
          this.props.user.username
          :
          'Welcome, please log in'
        }</p> */}
        <Row>
          <Col lg={8} md={10} lgOffset={2} mdOffset={1}>
            <Navbar.Header>
              {/*
              <h3 className="BrandIconWrapper" href="#">
                <div className="BrandIcon" />
              </h3>
              */}
              <h3 href="#" className="BrandName">
                EasyCourse
              </h3>
              <Navbar.Toggle className="NavbarToggle" />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem className="NavbarLinks" eventKey={1} href="https://goo.gl/forms/mZNI64fdYueRzLct2" target="_blank">Join Us</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Navbar>
    );
  }
}

// Anything returned from this function will end up as props
// const mapStateToProps = (state) => {
//   return {
//     user: state.user
//   };
// }

// export default connect(mapStateToProps)(NavBar);

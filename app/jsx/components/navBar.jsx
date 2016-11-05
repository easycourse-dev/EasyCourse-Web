import React, { Component} from 'react';
import { Navbar, Nav, NavItem, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// Redux
import { connect } from 'react-redux';
import * as actions from '../redux/actions/navbarLinks';

export default class NavBar extends Component {

  render() {
    return (
      <Navbar className="Navbar">
        <Row>
          <Col lg={10} md={10} lgOffset={1} mdOffset={1} style={{padding: '0'}}>
            <Navbar.Header>
              <h3 href="#" className="BrandName">
                EasyCourse
              </h3>
              <Navbar.Toggle className="NavbarToggle" />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer to="/home">
                  <NavItem className="NavbarLinks">Home</NavItem>
                </LinkContainer>
                <NavItem className="NavbarLinks" href="https://goo.gl/forms/Ny7oCjYQ9gCI6GrE2" target="_blank">Join Us</NavItem>
                <LinkContainer to="/signin">
                  <NavItem className="NavbarLinks NavbarSignIn">Sign In</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Navbar>
    );
  }
}

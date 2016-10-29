import React, { Component} from 'react';
import { Navbar, Nav, NavItem, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// Redux
import { connect } from 'react-redux';
import * as actions from '../redux/actions/navbarLinks';

class NavBar extends Component {

  handleDownloadLinkToggle() {
    this.props.showDownloadLink
  }

  render() {
    return (
      <Navbar className="Navbar">
        <Row>
          <Col lg={8} md={10} lgOffset={2} mdOffset={1}>
            <Navbar.Header>
              <h3 className="BrandIconWrapper" href="#">
                <div className="BrandIcon" />
              </h3>
              <h3 href="#" className="BrandName">
                EasyCourse
              </h3>
              <Navbar.Toggle className="NavbarToggle" />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer to="/">
                  <NavItem className="NavbarLinks" eventKey={1}>Home</NavItem>
                </LinkContainer>
                <LinkContainer to="/">
                  <NavItem className="NavbarLinks" eventKey={2} onClick={() => this.handleDownloadLinkToggle()}>Download</NavItem>
                </LinkContainer>
                <NavItem className="NavbarLinks" eventKey={3} href="https://goo.gl/forms/Ny7oCjYQ9gCI6GrE2" target="_blank">Join Us</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Navbar>
    );
  }
}

export default connect(actions)(NavBar);

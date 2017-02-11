import React, { Component} from 'react'
import { Navbar, Nav, NavItem, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import actions from '../redux/actions/index'

class NavBar extends Component {
  onHeaderClick() {
    if (localStorage.getItem('authToken')) {
      this.props.router.push('/home');
    } else {
      this.props.router.push('/public');
    }
  }

  render() {
    return (
      <Navbar className="Navbar">
        <Row>
          <Col lg={10} md={10} lgOffset={1} mdOffset={1} style={{padding: '0'}}>
            <Navbar.Header>
              <h3 onClick={() => {this.onHeaderClick()}} className="BrandName">
                EasyCourse
              </h3>
              <Navbar.Toggle className="NavbarToggle" />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
								<NavItem onClick={() => {this.onHeaderClick()}} className="NavbarLinks">Home</NavItem>
                <NavItem className="NavbarLinks" href="https://goo.gl/forms/Ny7oCjYQ9gCI6GrE2" target="_blank">Join Us</NavItem>
                <LinkContainer to="/signin">
                  <NavItem className="NavbarLinks NavbarSignIn" >Sign In</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Navbar>
    );
  }
}

export default connect(null, actions)(withRouter(NavBar))

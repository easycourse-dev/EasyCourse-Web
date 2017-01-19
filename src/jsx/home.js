import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import SideNav from './components/home/sideNav'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Row>
          <Col xs={3} sm={3} md={3} lg={3}>
            <SideNav />
          </Col>
          <Col xs={9} sm={9} md={9} lg={9}>
            <h2>Hello from the home page</h2>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home

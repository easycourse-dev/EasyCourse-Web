import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Sidebar from 'react-sidebar'
import SideBarContent from './components/home/sidebarContent'

class Home extends Component {
  render() {
    const sidebarContent = (
      <div style={{ width: '225px', paddingTop: 10}}>
        <SideBarContent />
      </div>
    )
    return (
      <Sidebar
        sidebar={sidebarContent}
        open={true}
        docked={true}
      >
        {this.props.children}
      </Sidebar>
    )
  }
}

export default Home

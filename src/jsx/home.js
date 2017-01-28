import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Sidebar from 'react-sidebar'
import SideBarContent from './components/home/sidebarContent'
import io from 'socket.io-client'

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
        {
          this.props.children ?
            this.props.children
          :
            <h1>Welcome to EasyCourse Chat</h1>
        }
      </Sidebar>
    )
  }
}

export default Home

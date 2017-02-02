import React, { Component } from 'react'
import Sidebar from 'react-sidebar'
import SideBarContent from './components/home/sidebar/sidebarContent'

class Home extends Component {
  render() {
    const sidebarContent = (
      <div style={{ width: '225px' }}>
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

import React, { Component } from 'react'
import Sidebar from 'react-sidebar'
import SideBarContent from './components/home/sidebar/sidebarContent'
import SettingsSidebarContent from './components/home/settingsSidebar/settingsSidebarContent'
import { connect } from 'react-redux'
import actions from './redux/actions/index'

class Home extends Component {
  render() {
    const sidebarContent = (
      <div style={{ width: '250px' }}>
        <SideBarContent />
      </div>
    )

    const settingsSidebarContent = (
      <div style={{ width: '400px' }}>
        <SettingsSidebarContent />
      </div>
    )

    return (
      <Sidebar
        sidebar={sidebarContent}
        open={true}
        docked={true}
      >
        <Sidebar
          sidebarClassName="SettingsSideBar"
          sidebar={settingsSidebarContent}
          open={this.props.settingsSidebarOpen}
          onSetOpen={() => this.props.toggleSettingsSidebar(!this.props.settingsSidebarOpen)}
          pullRight={true}
        >
          {
            this.props.children ?
              this.props.children
            :
              <h1>Welcome to EasyCourse Chat</h1>
          }
        </Sidebar>
      </Sidebar>
    )
  }
}

export default connect(
  (state) => ({
    settingsSidebarOpen: state.settings.settingsSidebarOpen
  })
  ,
  actions
)(Home)

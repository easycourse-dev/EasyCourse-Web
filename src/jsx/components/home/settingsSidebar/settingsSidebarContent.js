import React, { Component } from 'react'
import { connect } from 'react-redux'
import LanguageContent from './languageContent'
import CoursesAndRoomsContent from './coursesAndRoomsContent'

class SettingsSidebarContent extends Component {
  render() {
    const { settingsViewName } = this.props
    switch(settingsViewName) {
      case 'language':
        return <LanguageContent />
      case 'coursesAndRooms':
        return <CoursesAndRoomsContent />
      default:
        return <h5>Can't find what you are looking for</h5>
    }
  }
}

export default connect(
  (state) => ({
    settingsViewName: state.settings.viewName
  })
)(SettingsSidebarContent)

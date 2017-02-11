import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../../redux/actions/index'

class CoursesAndRoomsContent extends Component {
  render() {
    return (
      <h5>CoursesAndRoomsContent</h5>
    )
  }
}

export default connect(null, actions)(CoursesAndRoomsContent)

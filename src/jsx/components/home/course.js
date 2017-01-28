import React, { Component } from 'react'

class Course extends Component {
  render() {
    const { params } = this.props
    return (
      <div>
        {
          this.props.children ?
            this.props.children
          :
            <h5>Welcome to {params.courseName}</h5>
        }
      </div>
    )
  }
}

export default Course

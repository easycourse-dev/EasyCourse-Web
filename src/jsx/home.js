import React, { Component } from 'react'
import {
  Row,
  Col,
  Accordion,
  Panel,
  Button
} from 'react-bootstrap'
import { connect } from 'react-redux'

class Home extends Component {

  renderRooms = (courseName, rooms) => {
    return rooms.map((room, i) => {
      if (room.name.includes(courseName)) {
        return (
          <Button
            block
            key={i}
          >{room.name}</Button>
        )
      }
    })
  }

  renderCourses = (courses, rooms) => {
    return courses.map((course, i) => {
      return (
        <Panel header={course.name} eventKey={i} key={i}>
          <h5 style={{textAlign: 'center'}}>Rooms</h5>
          {this.renderRooms(course.name, rooms)}
        </Panel>
      )
    })
  }

  render() {
    const { courses, rooms } = this.props
    if (!courses) {
      return (<div>Loading...</div>)
    }
    return (
      <div className="Home">
        <Row>
          <Col xs={3} sm={3} md={3} lg={3}>
            <h5 style={{ textAlign: 'center'}}>Courses</h5>
                <Accordion>
                  {this.renderCourses(courses, rooms)}
                </Accordion>
          </Col>
          <Col xs={9} sm={9} md={9} lg={9}>
            <h2>Hello from the home page</h2>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    courses: state.user.current_user.joinedCourse,
    rooms: state.user.current_user.joinedRoom
  })
)(Home)

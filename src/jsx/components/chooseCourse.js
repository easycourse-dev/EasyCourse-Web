import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getCourses } from '../redux/actions/courses';

class ChooseCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }

  updateCourses(searchText, universityID) {
    getCourses(searchText, universityID)
  }

  renderCourses(courses) {
    return(
      courses.map(course => {
        return(
          <li>
            <Button className="SignupListItem">
              <p>{course.name}</p>
              <p>{course.title}</p>
            </Button>
          </li>
        )
      })
    )
  }

  render() {
    const { courses, universityID } = this.props;
    return (
      <div>
        <h2 className="PageTitle" key="loginFormTitle">
          What Classes Are You In?
        </h2>
        <form>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.searchText}
              placeholder="Search For A Class"
              onChange={(event) => {
                this.setState({ searchText: event.target.value })
                this.updateCourses(event.target.value, universityID)
              }}
            />
          </FormGroup>
        </form>
        <ul style={{ listStyle: 'none' }}>
          {
            this.renderCourses(courses)
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses.coursesBySchool,
    universityID: state.user.postInitialSignUpValues.school
  };
}

export default connect(mapStateToProps, null)(ChooseCourse);

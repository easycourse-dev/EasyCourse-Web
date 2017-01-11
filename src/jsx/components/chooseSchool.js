import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import actions from '../redux/actions/index'
import ChooseSchoolList from './chooseSchoolList'

class ChooseSchool extends Component {
  render() {
    const { selectedUniversity } = this.props;
    return (
      <div>
        <h2 className="SignUpSetupPageTitle" key="loginFormTitle">
          Where Do You Go To School?
        </h2>
        <div>
          <ChooseSchoolList />
        </div>
        <div>
          {selectedUniversity.length > 1 ?
            <Button
              className="NextPreviousButton"
              onClick={() => this.props.changeSignupStage(2)}
            >Next</Button>
            :
            ''
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  universities: state.university.universities,
  selectedUniversity: state.university.selectedUniversity
})

export default connect(
  mapStateToProps,
  actions
)(ChooseSchool);

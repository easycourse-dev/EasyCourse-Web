import React, { Component } from 'react'
import { Button, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import actions from '../redux/actions/index'
import ChooseSchoolList from './chooseSchoolList'

class ChooseSchool extends Component {
  render() {
    const { selectedUniversity } = this.props;
    return (
      <div>
        <h2 className="SignUpSetupPageTitle" key="loginFormTitle">
          Choose University
        </h2>
        <div>
          <ChooseSchoolList />
        </div>
        <Col lg={12} md={12} sm={12} style={{ display: 'table'}}>
          {
            selectedUniversity.length > 1 ?
              <div style={{ display: 'table', margin: '0 auto', paddingTop: 15 }}>
                <Button
                  className="NextPreviousButton"
                  onClick={() => this.props.changeSignupStage(2)}
                >Next</Button>
              </div>
            :
              ''
          }
        </Col>
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

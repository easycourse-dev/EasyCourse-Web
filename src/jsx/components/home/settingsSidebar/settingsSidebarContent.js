import React, { Component } from 'react'
import actions from '../../../redux/actions/index'
import { connect } from 'react-redux'
import { Modal, FormGroup, ControlLabel, Button } from 'react-bootstrap'
import Select from 'react-select'
import CircleImageView from '../../circleImageView'

class SettingsSidebarContent extends Component {
  state = {
    showProfileModal: false,
    showCoursesModal: false,
    displayNameText: '',
    selectedValues: []
  }

  closeProfileModal = () => {
    this.setState({ showProfileModal: false })
  }

  openProfileModal = () => {
    this.setState({ showProfileModal: true })
  }

  closeCoursesModal = () => {
    this.setState({ showCoursesModal: false })
  }

  openCoursesModal = () => {
    this.setState({ showCoursesModal: true })
  }

  handleDisplayNameTextChange = (e) => {
    this.setState({ displayNameText: e.target.value })
  }

  handleSubmit = (e) => {
    alert('A name was submitted: ' + this.displayNameInput.value)
    e.preventDefault()
  }

  handleSelectedValuesChange = (values) => {
    this.setState({ selectedValues: values })
  }

  render() {
    const { currentUser, languages } = this.props

    return (
      <div>
        <div className="SettingsSidebarImagePositioning">
					<CircleImageView className="CenteringImage" size="lg" url={currentUser.avatarUrl}/>
				</div>
        <hr />
        <div className="text-center">
          <strong>{currentUser.displayName}</strong>
        </div>
        <hr />
        <ul style={{ listStyle: 'none' }}>
          <li
            className="UserPropertiesPopoverListItem"
            onClick={() => this.openProfileModal()}
          >Profile & Account</li>
        </ul>
        <hr />
        <ul style={{ listStyle: 'none' }}>
          <li
            className="UserPropertiesPopoverListItem"
            onClick={() => this.openCoursesModal()}
          >Manage Course</li>
        </ul>
        <hr />
        <ul style={{ listStyle: 'none' }}>
          <li className="UserPropertiesPopoverListItem"
            onClick={() => window.open("https://goo.gl/forms/Ny7oCjYQ9gCI6GrE2")}
          >Join Us</li>
          <li className="UserPropertiesPopoverListItem"
            onClick={() => window.open("http://www.easycourse.io/docs")}
          >Privacy & Terms</li>
          <li className="UserPropertiesPopoverListItem"
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScbmQ5LsXsrpBDIr32iYdhP-VTwiAtejvUrUDyW8YbtTAL5Lg/viewform")}
          >Feedback</li>
        </ul>

        <Modal show={this.state.showProfileModal} onHide={() => this.closeProfileModal()}>
          <Modal.Header closeButton>
            <Modal.Title>Profile & Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <FormGroup
                controlId="formBasicText"
              >
                <ControlLabel>Display Name</ControlLabel>
                <input
                  className="form-control"
                  type="text"
                  defaultValue={currentUser.displayName}
                  ref={(input) => this.displayNameInput = input}
                />
              </FormGroup>
              <FormGroup
                controlId="formBasicText"
              >
                <ControlLabel>Email</ControlLabel>
                <input
                  className="form-control"
                  type="text"
                  disabled
                  defaultValue={currentUser.email}
                  ref={(input) => this.emailInput = input}
                />
              </FormGroup>
              <ControlLabel>Languages</ControlLabel>
              <Select
                multi
                simpleValue
                value={this.state.selectedValues}
                onChange={values => this.handleSelectedValuesChange(values)}
                options={languages}
              />
                <hr />
              <ControlLabel>Update Password</ControlLabel>
              <FormGroup
                controlId="formBasicText"
              >
                <ControlLabel>Old Password</ControlLabel>
                <input
                  className="form-control"
                  type="password"
                  ref={(input) => this.oldPasswordInput = input}
                />
                <ControlLabel>New Password</ControlLabel>
                <input
                  className="form-control"
                  type="password"
                  ref={(input) => this.newPasswordInput = input}
                />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button>Save Changes</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showCoursesModal} onHide={() => this.closeCoursesModal()}>
          <Modal.Header closeButton>
            <Modal.Title>Manage Courses</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
          </Modal.Body>
        </Modal>

      </div>
    )
  }
}

export default connect(
  (state) => ({
    currentUser: state.user.current_user,
    settingsSidebarOpen: state.settings.settingsSidebarOpen,
    languages: state.language.languages
  }),
  actions
)(SettingsSidebarContent)

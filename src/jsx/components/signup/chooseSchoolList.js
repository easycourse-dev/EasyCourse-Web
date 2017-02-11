import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/actions/index'
import ItemCheckbox from '../itemCheckbox'

class ChooseSchoolList extends Component {

  componentWillMount() {
    this.props.getUniversities()
  }

  onAddSelectedUniversity = (universityId) => {
    this.props.addSelectedUniversity(universityId)
  }

  onRemoveSelectedUniversity = () => {
    this.props.removeSelectedUniversity()
  }

  renderUniversitiesList = () => {
    const { universities, selectedUniversity } = this.props
    return universities.map((university, key) => {
      if (university._id === selectedUniversity) {
        // return button with removedSelectedUniversity func
        return (
          <div
            key={'University' + key}
            className="SignupListItem"
            onClick={() => this.props.removeSelectedUniversity()}
          >
            <p className="SignupSchoolName">{university.name}</p>
            <ItemCheckbox className="SignupSchoolCheckbox" />
          </div>
        )
      } else {
        // return button with addSelectedUniversity func
        return (
          <div
            key={'University' + key}
            className="SignupListItem"
            onClick={() => this.props.addSelectedUniversity(university._id)}
          >
            <p className="SignupSchoolName">{university.name}</p>
          </div>
        )
      }
    })
  }

  render() {
    return(
      <ul style={{ listStyle: 'none' }}>
        {this.renderUniversitiesList()}
      </ul>
    )
  }
}

export default connect(
  (state) => ({
    universities: state.university.universities,
    selectedUniversity: state.university.selectedUniversity
  }),
  actions
)(ChooseSchoolList)

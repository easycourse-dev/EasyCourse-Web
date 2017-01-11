import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../redux/actions/index'
import { Button } from 'react-bootstrap'

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
          <Button
            key={'University' + key}
            className="SignupListItem"
            bsStyle="primary"
            type="submit"
            onClick={() => this.props.removeSelectedUniversity()}
          >
            <i className="fa fa-check" aria-hidden="true"></i>
            {university.name}
          </Button>
        )
      } else {
        // return button with addSelectedUniversity func
        return (
          <Button
            key={'University' + key}
            className="SignupListItem"
            bsStyle="primary"
            type="submit"
            onClick={() => this.props.addSelectedUniversity(university._id)}
          >
            {university.name}
          </Button>
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

const mapStateToProps = (state) => ({
  universities: state.university.universities,
  selectedUniversity: state.university.selectedUniversity
})


export default connect(mapStateToProps, actions)(ChooseSchoolList)

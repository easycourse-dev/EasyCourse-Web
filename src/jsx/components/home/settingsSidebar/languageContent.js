import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../../redux/actions/index'

class LanguageContent extends Component {

  componentDidMount = () => {
    this.props.getLangauges()
  }

  render() {
    const { languages } = this.props
    return (
      <div>
        <h5>
          This is not your system language.
          If you choose a language, next time when you join courses,
          you will also join the course rooms with the selected languages automatically
        </h5>
        <ul style={{ listStyle: 'none'}}>
          {languages.map(language => <li>{language.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    languages: state.settings.languages
  })
  ,
  actions
)(LanguageContent)

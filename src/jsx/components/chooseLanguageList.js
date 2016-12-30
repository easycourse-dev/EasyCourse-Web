import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../redux/actions/index'
import { Button } from 'react-bootstrap'

class ChooseLanguageList extends Component {

  componentWillMount() {
    this.props.getLanguages()
  }
  
  onAddSelectedLanguage = language => {
    this.props.addSelectedLanguage(language)
  }

  onRemoveSelectedLanguage = language => {
    this.props.removeSelectedLanguage(language)
  }

  renderLanguages = () => {
    const { availableLanguages, selectedLanguages } = this.props
    return availableLanguages.map(language => {
      if (selectedLanguages.includes(language)) {
        return(
          <li key={language.code}>
            <Button
              className="SignupListItem"
              onClick={() => this.onRemoveSelectedLanguage(language)}
            >
              <i className="fa fa-times" aria-hidden="true"></i>
              {language.name}
            </Button>
          </li>
        )
      } else {
        return(
          <li key={language.code}>
            <Button
              className="SignupListItem"
              onClick={() => this.onAddSelectedLanguage(language)}
            >
              <i className="fa fa-check" aria-hidden="true"></i>
              {language.name}
            </Button>
          </li>
        )
      }
    })
  }

  render() {
    return(
      <ul style={{ listStyle: 'none' }}>
        {this.renderLanguages()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedLanguages: state.language.selectedLanguages,
  availableLanguages: state.language.availableLanguages
})

export default connect(
  mapStateToProps, 
  actions
)(ChooseLanguageList)

import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import actions from '../redux/actions/index'

class ChooseLanguage extends Component {
  render() {
    return (
      <div>
        <h2 className="PageTitle" key="loginFormTitle">
          Speak Any Other Languages?
        </h2>
        <Button bsStyle="primary">Spanish</Button>
        
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(ChooseLanguage)

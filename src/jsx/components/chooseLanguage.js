import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { signUpSetUpChooseLanguage } from '../redux/actions/user'

class ChooseLanguage extends Component {
  render() {
    return (
      <div>
        <h2 className="PageTitle" key="loginFormTitle">
          Speak Any Other Languages?
        </h2>
        <Button bsStyle="primary">Spanish</Button>
        <Button
          bsStyle="warning"
          onClick={() => signUpSetUpChooseLanguage(universityID, 1)}
        >Previous</Button>
        <Button
          bsStyle="success"
          onClick={() => signUpSetUpChooseLanguage(selectedCourses, 3)}
        >Next</Button>
      </div>
    );
  }
}

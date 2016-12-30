import React, { Component, PropTypes as PT } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import actions from '../redux/actions/index'

class ChooseSchool extends Component {
  static propTypes = {
    handleSubmit: PT.func
  };

  componentWillMount() {
    this.props.getUniversities()
  }

  render() {
    const { universities } = this.props;
    return (
      <div>
        <h2 className="SignUpSetupPageTitle" key="loginFormTitle">
          Where Do You Go To School?
        </h2>
        {
          universities ?
          universities.map((university, key) => {
            return (
              <Button
                key={'University' + key}
                className="SignupListItem"
                bsStyle="primary"
                type="submit"
                onClick={() => this.props.signUpSetUpChooseUniversity(university._id, 2)}
              >{university.name}</Button>
            )
          })
          :
          <h5>Loading...</h5>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  universities: state.university.universities
})

export default connect(
  mapStateToProps,
  actions
)(ChooseSchool);

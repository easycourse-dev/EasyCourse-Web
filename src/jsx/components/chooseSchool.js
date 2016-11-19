import React, { Component, PropTypes as PT } from 'react';
import { Button } from 'react-bootstrap';
import { signUpSetUpChooseUniversity } from '../redux/actions/user';
import { getUniversities } from '../redux/actions/universities';
import { connect } from 'react-redux';

class ChooseSchool extends Component {
  static propTypes = {
    handleSubmit: PT.func
  };

  componentWillMount() {
    getUniversities()
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
          universities.map((university) => {
            return (
              <Button
                className="SignUpSetupChooseUniversityListItem"
                bsStyle="primary"
                type="submit"
                onClick={() => signUpSetUpChooseUniversity(university._id)}
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

function mapStateToProps(state) {
  return {
    universities: state.university.universities
  };
}

export default connect(mapStateToProps, null)(ChooseSchool);

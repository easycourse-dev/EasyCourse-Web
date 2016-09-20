import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isLoggedIn } from '../redux/actions/user';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <p>{this.props.isLoggedIn ?
          this.props.user.username
          :
          'Welcome, please log in'
        }</p>
      </nav>
    );
  }
}

// Anything returned from this function will end up as props
const mapStateToProps = (state) => {
  return {
    user: state.currentUser
  };
}

// Anything returned from this function will end up as props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    isLoggedIn: isLoggedIn
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

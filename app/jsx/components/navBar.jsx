import React, { Component, PropTypes as PT } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class NavBar extends Component {

  static propTypes = {
    user: PT.Object
  }

  render() {
    return (
      <nav>
      {this.props}
        <p>{this.props.user ?
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
    user: state.user
  };
}

export default connect(mapStateToProps)(NavBar);

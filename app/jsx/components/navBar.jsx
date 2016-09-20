import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <p>{this.props.user.username}</p>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.currentUser
  };
}

export default connect(mapStateToProps)(NavBar);

import React, { Component, PropTypes as PT } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class NavBar extends Component {

  // static propTypes = {
  //   user: PT.Object
  // }

  render() {
    return (
      <Navbar className="Navbar">
      {/* {this.props}
        <p>{this.props.user ?
          this.props.user.username
          :
          'Welcome, please log in'
        }</p> */}
        <h3 className="BrandIconWrapper" href="#">
          <img className="BrandIcon" />
        </h3>
        <h3 href="#" className="BrandName">
          EasyCourse
        </h3>
      </Navbar>
    );
  }
}

// Anything returned from this function will end up as props
// const mapStateToProps = (state) => {
//   return {
//     user: state.user
//   };
// }

// export default connect(mapStateToProps)(NavBar);

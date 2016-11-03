import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class AuthComponent extends Component {
    static contextTypes = {
      router: React.Proptypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return(
        return <ComposedComponent {...this.props}/>
      )
    }

    function mapStateToProps(state) {
      return {
        authenticated: state.user.authenticated
      }
    }
  }

  return connect(mapStateToProps)(AuthComponent);
}

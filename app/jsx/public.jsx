import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Login, Signup } from './components';

export default class Public extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSigningUp: false
    };
  }

  render() {
    return (
      <Row className="Public">
        <Col sm={12} md={4} mdOffset={4} lg={4} lgOffset={4}>
          <div className="publicFormWrapper">
            {this.state.isSigningUp ?
              <Signup />
              :
              <Login />
            }
          </div>
          <div className="publicFormSwitches">
            {this.state.isSigningUp ?
              <Button bsStyle="link" onClick={()=> {this.setState({isSigningUp: false})}}>back to login</Button>
              :
              <Button bsStyle="link" onClick={()=> {this.setState({isSigningUp: true})}}>Sign up here</Button>
            }
          </div>
        </Col>
      </Row>
    );
  }
}

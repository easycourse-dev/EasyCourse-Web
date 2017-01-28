import React, { Component } from 'react'
import Message from './message'

export default class MessageList extends Component {

  componentDidMount = () => {
    console.log('Socket: ', this.props.socket)
  }

  componentWillRecieveProps = (nextProps) => {
    console.log('Socket: ', nextProps.socket)
  }

  render() {
    return (
      <ul style={{ listStyle: 'none'}}>
        <li>Message 1</li>
      </ul>
    )
  }
}

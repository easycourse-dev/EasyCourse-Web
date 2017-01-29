import React, { Component } from 'react'
import Message from './message'

export default class MessageList extends Component {

  render() {
    return (
      <ul style={{ listStyle: 'none'}}>
        {
          this.props.messages.map(message => <li>{message.msg.text}</li>)
        }
      </ul>
    )
  }
}

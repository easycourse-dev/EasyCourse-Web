import React, { Component } from 'react'
import Message from './message'

export default class MessageList extends Component {

  render() {
    return (
      <ul style={{ listStyle: 'none'}}>
        {
          this.props.messages.map(message => <li key={message._id}>{message.text}</li>)
        }
      </ul>
    )
  }
}

import React, { Component } from 'react'
import Message from './message'

export default class MessageList extends Component {
  render() {
    const { messages } = this.props
    return (
      <ul style={{ listStyle: 'none'}}>
        {
          messages.map(message => {
            return (
              <Message message={message} />
            )
          })
        }
      </ul>
    )
  }
}

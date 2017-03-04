import React, { Component } from 'react'
import Message from './message'

export default class MessageList extends Component {

  render() {
    return (
      <div style={{ overflow: 'hidden', height: '670px', overflowY: 'scroll', paddingTop: '60px'}}>
        <ul style={{ listStyle: 'none'}}>
          {
            this.props.messages.map(message => <Message message={message} />)
          }
        </ul>
      </div>
    )
  }
}

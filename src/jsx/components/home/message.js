import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    const { message } = this.props
    return (
      <li key={message.id} style={{ paddingTop: '10px'}}>
        <div>
          <small style={{ display: 'inline'}}>{message.timeSentAt}</small>
          <p style={{ display: 'inline', marginLeft: '10px'}}>{message.from}</p>
          <small style={{ display: 'inline', marginLeft: '10px'}}>{message.text}</small>
        </div>
      </li>
    )
  }
}

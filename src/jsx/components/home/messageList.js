import React, { Component } from 'react'
import Message from './message'

export default class MessageList extends Component {
  render() {
    const { messages } = this.props
    return (
      <ul style={{ listStyle: 'none'}}>
        <li>Message 1</li>
      </ul>
    )
  }
}

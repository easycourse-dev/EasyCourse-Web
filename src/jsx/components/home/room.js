import React, { Component } from 'react'
import RoomHeader from './roomHeader'
import MessageList from './messageList'
import ChatInputBar from './chatInputBar'

export default class Room extends Component {
  componentDidMount = () => {
  }

  render() {
    const { params } = this.props
    return (
      <div>
        <RoomHeader roomName={params.roomName}/>
        <MessageList roomName={params.roomName} socket={this.state.socket} />
        <ChatInputBar roomName={params.roomName} socket={this.state.socket} />
      </div>
    )
  }
}

import React, { Component } from 'react'
// connect to socket
import RoomHeader from './roomHeader'
import MessageList from './messageList'
import ChatInputBar from './chatInputBar'

export default class Room extends Component {

  componentDidMount = () => {
    // fetch room messages
  }

  render() {
    const { params } = this.props
    return (
      <div>
        <RoomHeader roomName={params.roomName}/>
        <MessageList />
        <ChatInputBar />
      </div>
    )
  }
}

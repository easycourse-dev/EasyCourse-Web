import React, { Component } from 'react'
import RoomHeader from './roomHeader'
import MessageList from './messageList'
import ChatInputBar from './chatInputBar'
import { connect } from 'react-redux'
import actions from '../../redux/actions/index'

class Chat extends Component {

  componentDidMount = () => {
    const { socket } = this.props
    socket.on('message', (data, error) => {
      if (error) {
        console.log('message Error: ', error)
        return
      }
      this.props.receiveMessage(data)
    })
  }

  render() {
    const { roomName, socket, messages, activeRoom} = this.props
    if (roomName && messages && activeRoom) {
      return (
        <div>
          <RoomHeader roomName={roomName}/>
          <MessageList roomName={roomName} socket={socket} messages={messages}/>
          <ChatInputBar roomName={roomName} socket={socket} roomId={activeRoom}/>
        </div>
      )
    } else {
      return (
        <h5>Chat Loading...</h5>
      )
    }
  }
}

export default connect(
  (state) => ({
    messages: state.messages.data
  }),
  actions
)(Chat)

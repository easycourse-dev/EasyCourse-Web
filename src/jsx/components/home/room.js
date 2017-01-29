import React, { Component } from 'react'
import RoomHeader from './roomHeader'
import MessageList from './messageList'
import ChatInputBar from './chatInputBar'
import actions from '../../redux/actions/index'

import { connect } from 'react-redux'

class Room extends Component {

  state = {
    roomId: ''
  }

  findRoomId = (roomName) => {
    const { rooms } = this.props
    for (let room of rooms) {
      if (room.name === roomName) {
        this.setState({
          roomId: room._id
        })
      }
    }
  }

  componentDidMount = () => {
    const { socket, params } = this.props
    this.findRoomId(params.roomName)
    socket.on('message', (message, error) => {
      if (error) {
        console.log('Error in recieve message: ', error)
        return
      }
      console.log('Receive message: ', message)
      this.props.receiveMessage(message)
    })
  }
  render() {
    const { params, socket, messages } = this.props
    return (
      <div>
        <RoomHeader roomName={params.roomName}/>
        <MessageList roomName={params.roomName} socket={socket} messages={messages}/>
        <ChatInputBar roomName={params.roomName} socket={socket} roomId={this.state.roomId}/>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    socket: state.socket.socket,
    messages: state.messages.data,
    rooms: state.user.current_user.joinedRoom
  }),
  actions
)(Room)

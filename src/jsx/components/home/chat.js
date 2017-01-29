import React, { Component } from 'react'
import RoomHeader from './roomHeader'
import MessageList from './messageList'
import ChatInputBar from './chatInputBar'
import { connect } from 'react-redux'
import actions from '../../redux/actions/index'

class Chat extends Component {

  state = {
    roomId: ''
  }

  getRoomId = (rooms, roomName) => {
    for (let room of rooms) {
      if (room.name === roomName) {
        this.setState({
          roomId: room._id
        })
        return room._id
      }
    }
  }

  componentDidMount = () => {
    const { rooms, roomName, socket } = this.props
    let roomId = this.getRoomId(rooms, roomName)
    socket.emit('getRoomMessage', {roomId: roomId, time: '', limit: 20}, (data, error) => {
      if (error) {
        console.log('getRoomMessage Error: ', error)
        return
      }
      this.props.saveMessages(data.msg)
    })

    socket.on('message', (data, error) => {
      if (error) {
        console.log('message Error: ', error)
        return
      }
      this.props.receiveMessage(data)
    })
  }

  render() {
    const { roomName, socket, messages } = this.props
    if (this.state.roomId && messages) {
      return (
        <div>
          <RoomHeader roomName={roomName}/>
          <MessageList roomName={roomName} socket={socket} messages={messages}/>
          <ChatInputBar roomName={roomName} socket={socket} roomId={this.state.roomId}/>
        </div>
      )
    } else {
      return (
        <h5>Loading...</h5>
      )
    }
  }
}

export default connect(null, actions)(Chat)

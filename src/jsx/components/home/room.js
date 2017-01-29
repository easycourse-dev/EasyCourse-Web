import React, { Component } from 'react'
import Chat from './chat'
import actions from '../../redux/actions/index'
import { connect } from 'react-redux'

class Room extends Component {

  render() {
    const { params, socket, messages, rooms } = this.props

    if (socket && rooms) {
      return (
        <Chat roomName={params.roomName} socket={socket} messages={messages} rooms={rooms}/>
      )
    } else {
      return (<h5>Loading....</h5>)
    }
  }
}

export default connect(
  (state) => ({
    socket: state.socket.socket,
    messages: state.messages.data,
    rooms: state.user.current_user.joinedRoom,
    current_user: state.user.current_user
  }),
  actions
)(Room)

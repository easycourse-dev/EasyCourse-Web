import React, { Component } from 'react'
import Chat from './chat'
import actions from '../../redux/actions/index'
import { connect } from 'react-redux'

class Room extends Component {
  render() {
    const { params, socket, activeRoom } = this.props

    if (socket && activeRoom) {
      return (
        <Chat roomName={params.roomName} socket={socket} activeRoom={activeRoom}/>
      )
    } else {
      return (<h5>Room Loading....</h5>)
    }
  }
}

export default connect(
  (state) => ({
    socket: state.socket.socket,
    rooms: state.user.current_user.joinedRoom,
    current_user: state.user.current_user,
    activeRoom: state.user.activeRoom
  }),
  actions
)(Room)

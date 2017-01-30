import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import actions from '../../redux/actions/index'

class RoomButton extends Component {

  handleClick = (courseName, roomName, roomId) => {
    const { socket, activeRoom } = this.props
    this.props.updateActiveRoom(roomId)
    if (activeRoom !== roomId) {
      this.props.loadMessages(roomId, socket)
    }
    this.props.router.replace(`/home/course/${courseName}/room/${roomName}`)
  }

  render() {
    const { room, courseName, socket } = this.props
    if (socket) {
      return (
        <Button
          onClick={() => this.handleClick(courseName, room.name, room._id, socket)}
        >{room.name}</Button>
      )
    } else {
      return (
        <h5>Loading Room Button...</h5>
      )
    }
  }
}

export default connect(
  (state) => ({
    socket: state.socket.socket,
    activeRoom: state.user.activeRoom
  }),
  actions
)(withRouter(RoomButton))

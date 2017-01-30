import React, { Component } from 'react'
import {
  FormGroup,
  InputGroup,
  Button,
  FormControl,
} from 'react-bootstrap'
import { connect } from 'react-redux'
import actions from '../../redux/actions/index'

class ChatInputBar extends Component {

  state = {
    message: '',
  }

  handleMessageChange = (message) => this.setState({ message })

  sendMessage = (e) => {
    e.preventDefault()
    const { socket, roomId } = this.props
    socket.emit('message', { toRoom: roomId, text: this.state.message}, (message, error) => {
      if (error) { console.log('Error in sendMessage: ', error) }

      this.props.addMessage(message.msg)
    })
    this.setState({ message: '' })
  }

  render() {
    return (
      <div style={{ bottom: '0px', position: 'fixed', paddingRight: '10px', paddingLeft: '10px'}}>
        <form onSubmit={this.sendMessage}>
          <FormGroup bsSize="large">
            <InputGroup>
              <InputGroup.Button>
                <Button bsSize="large">+</Button>
              </InputGroup.Button>
              <FormControl
                type="text"
                placeholder="Something"
                value={this.state.message}
                onChange={e => this.handleMessageChange(e.target.value)}
              />
            </InputGroup>
          </FormGroup>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  actions
)(ChatInputBar)

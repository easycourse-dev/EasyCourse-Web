import React, { Component } from 'react'
import {
  FormGroup,
  InputGroup,
  Button,
  FormControl,
} from 'react-bootstrap'

class ChatInputBar extends Component {
  state = {
    message: ''
  }

  handleMessageChange = (message) => this.setState({ message })

  sendMessage = (e) => {
    e.preventDefault()
    console.log('Message sent: ', this.state.message)
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

export default ChatInputBar

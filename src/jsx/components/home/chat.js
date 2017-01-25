import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatInputBar from './chatInputBar'

const fakeMessages = [
  {id: 'alsg3048', text: 'Message', from: 'Student 1'},
  {id: 'alsdkfw984r', text: 'Message', from: 'Student 2'},
  {id: 'qwoiertu897', text: 'Message', from: 'Student 3'},
  {id: 'zvlkxcjhv978', text: 'Message', from: 'Student 4'},
  {id: '1234qsfg', text: 'Message', from: 'Student 5'},
  {id: 'rthw564', text: 'Message', from: 'Student 6'},
  {id: 'asdfetr6', text: 'Message', from: 'Student 7'}
]
class Chat extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.params.courseName}: {this.props.params.roomName}</h2>
        <div>
          <ul>
            {fakeMessages.map(message => {
              return (
                <li key={message.id}>
                  {message.from} : {message.text}
                </li>
              )
            })}
          </ul>
        </div>
        <div style={{ bottom: '0px', paddingLeft: '15px', paddingRight: '15px', position: 'absolute', width: '100%' }}>
          <ChatInputBar />
        </div>
      </div>
    )
  }
}

export default Chat

import React, { Component } from 'react'
// import { connect } from 'react-redux'
import ChatInputBar from './chatInputBar'
import MessageList from './messageList'
import ChatHeader from './chatHeader'
const faker = require('faker')

const fakeMessages = []

class Chat extends Component {
  componentWillMount() {
    for (let i = 0; i < 100; i++) {
      let newMessage = {
        id: faker.address.zipCode(),
        timeSentAt: '12:30 PM',
        text: faker.lorem.sentences(2),
        from: faker.name.firstName(),
      }
      fakeMessages.push(newMessage)
    }
  }

  render() {
    const { params } = this.props
    return (
      <div>
        <ChatHeader courseName={params.courseName} roomName={params.roomName}/>
        <div style={{ overflowY: 'scroll', height: '680px'}}>
          <MessageList messages={fakeMessages} />
        </div>
        <div style={{ bottom: '0px', paddingLeft: '15px', paddingRight: '15px', position: 'absolute', width: '100%' }}>
          <ChatInputBar />
        </div>
      </div>
    )
  }
}

export default Chat

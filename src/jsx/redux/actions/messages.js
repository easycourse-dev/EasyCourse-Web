import {
  ADD_MESSAGE,
  RECEIVE_MESSAGE,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_FAILURE
} from '../actions/types'

const addMessage = (message) => {
  return dispatch => {
    dispatch({
      type: ADD_MESSAGE,
      payload: message
    })
  }
}

const receiveMessage = (message) => {
  return dispatch => {
    dispatch({
      type: RECEIVE_MESSAGE,
      payload: message
    })
  }
}

const loadMessages = (roomId, socket) => {
  return dispatch => {
    const seconds = new Date() / 1000
    socket.emit('getRoomMessage', {roomId: roomId, time: seconds, limit: 100}, (data, error) => {
      if (error) {
        dispatch({ type: LOAD_MESSAGES_FAILURE })
      } else {
        dispatch({
          type: LOAD_MESSAGES_SUCCESS,
          payload: {
            messages: data.msg,
            roomId: roomId
          }
        })
      }
    })
  }
}

module.exports = {
  addMessage,
  receiveMessage,
  loadMessages
}

import {
  // LOAD_MESSAGES_SUCCESS,
  // LOAD_MESSAGES_FAILURE,
  ADD_MESSAGE,
  RECEIVE_MESSAGE,
  SAVE_MESSAGES,
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

const saveMessages = (messages) => {
  return dispatch => {
    dispatch({
      type: SAVE_MESSAGES,
      payload: messages
    })
  }
}

module.exports = {
  addMessage,
  receiveMessage,
  saveMessages
}

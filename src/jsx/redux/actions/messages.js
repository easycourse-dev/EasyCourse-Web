import {
  // LOAD_MESSAGES_SUCCESS,
  // LOAD_MESSAGES_FAILURE,
  ADD_MESSAGE,
  RECEIVE_MESSAGE,
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

module.exports = {
  addMessage,
  receiveMessage,
}

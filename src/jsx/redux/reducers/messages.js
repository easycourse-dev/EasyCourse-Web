import {
  ADD_MESSAGE,
  RECEIVE_MESSAGE,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_FAILURE
} from '../actions/types'

let initialState = {
  data: []
}

const messagesReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case ADD_MESSAGE:
      return {
        ...state,
        data: [...state.data, payload]
      }
    case RECEIVE_MESSAGE:
      return {
        ...state,
        data: [...state.data, payload]
      }
    case LOAD_MESSAGES_SUCCESS:
      return {
        ...state,
        data: [...state.data.filter(message => message.toRoom === payload.roomId), ...payload.messages]
      }
    case LOAD_MESSAGES_FAILURE:
      return {
        ...state,
        error: 'Unable to fetch messages'
      }
  }
  return state
}

export default messagesReducer

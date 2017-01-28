import {
  SOCKET_CONNECTED,
  SOCKET_DISCONNECTED
} from '../actions/types'

const initialState = {
  socket: null
}

const socketReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case SOCKET_CONNECTED:
      return {
        ...state,
        socket: payload.socket
      }
    case SOCKET_DISCONNECTED:
      return {
        ...state,
        message: 'Socket is disconnected'
      }
    default:
      break
  }
  return state
}

export default socketReducer

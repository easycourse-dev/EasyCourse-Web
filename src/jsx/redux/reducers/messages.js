import {
  // LOAD_MESSAGES_SUCCESS,
  // LOAD_MESSAGES_FAILURE,
  ADD_MESSAGE,
  RECEIVE_MESSAGE,
} from '../actions/types'

let initialState = {
  data: []
}

const messagesReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        data: [...state.data, payload]
      }
    }
    case RECEIVE_MESSAGE: {
      return {
        ...state,
        data: [...state.data, payload]
      }
    }
  }
  return state
}

export default messagesReducer
import {
  GET_UNIVERSITIES_SUCCESS,
  GET_UNIVERSITIES_FAILURE,
} from '../actions/types';

const initialState = {
  universities: []
}

export default function universityReducer(state = initialState, action) {
  switch(action.type) {
    case GET_UNIVERSITIES_SUCCESS:
      return {
        ...state,
        universities: action.payload
      }
    case GET_UNIVERSITIES_FAILURE:
      return {
        ...state,
        error: 'GET_UNIVERSITIES_FAILURE'
      }
  }
  return state;
}

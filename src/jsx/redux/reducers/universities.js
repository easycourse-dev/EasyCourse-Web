import {
  GET_UNIVERSITIES_SUCCESS,
  GET_UNIVERSITIES_FAILURE,
  ADD_SELECTED_UNIVERSITY,
	REMOVE_SELECTED_UNIVERSITY,
} from '../actions/types';

const initialState = {
  universities: [],
  selectedUniversity: ''
}

export default function universityReducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case GET_UNIVERSITIES_SUCCESS:
      return {
        ...state,
        universities: payload
      }
    case GET_UNIVERSITIES_FAILURE:
      return {
        ...state
      }
    case ADD_SELECTED_UNIVERSITY:
      return {
        ...state,
        selectedUniversity: payload
      }
    case REMOVE_SELECTED_UNIVERSITY:
      return {
        ...state,
        selectedUniversity: ''
      }
    default:
      break;
  }
  return state;
}

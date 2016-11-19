import {
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
} from '../actions/types';

const initialState = {
  coursesBySchool: []
}

export default function coursesReducer(state = initialState, action) {
  switch(action.type) {
    case GET_COURSES_SUCCESS:
      return {
        ...state,
        coursesBySchool: action.payload
      }
    case GET_COURSES_FAILURE:
      return {
        ...state,
        error: 'GET_COURSES_FAILURE'
      }
  }
  return state;
}

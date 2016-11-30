import {
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
  ADD_SELECTED_COURSE,
  REMOVE_SELECTED_COURSE
} from '../actions/types';

const initialState = {
  coursesBySchool: [],
  selectedCourses: []
}

export const coursesReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case GET_COURSES_SUCCESS:
      return {
        ...state,
        coursesBySchool: payload
      }
    case GET_COURSES_FAILURE:
      return {
        ...state,
        coursesBySchool: [],
        error: 'GET_COURSES_FAILURE'
      }
    case ADD_SELECTED_COURSE:
      return {
        ...state,
        selectedCourses: [payload, ...state.selectedCourses],
      }
    case REMOVE_SELECTED_COURSE:
      return {
        ...state,
        selectedCourses: state.selectedCourses.filter(course => course !== payload),
      }
    default:
      break;
  }
  return state;
}

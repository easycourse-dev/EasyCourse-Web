import {
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
  ADD_SELECTED_COURSE,
  REMOVE_SELECTED_COURSE,
  REMOVE_SELECTED_COURSES,
  CLEAR_SKIP,
  CLEAR_SEARCH_TEXT,
  CLEAR_AVAILABLE_COURSES,
  LOAD_MORE_SUCCESS,
  LOAD_MORE_FAILURE
} from '../actions/types';

const initialState = {
  coursesBySchool: [],
  selectedCourses: [],
  skip: 0,
  searchText: ''
}

export const coursesReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case GET_COURSES_SUCCESS:
      return {
        ...state,
        coursesBySchool: payload.courses,
        searchText: payload.searchText
      }
    case GET_COURSES_FAILURE:
      return {
        ...state,
        error: 'GET_COURSES_FAILURE'
      }
    case ADD_SELECTED_COURSE:
      return {
        ...state,
        selectedCourses: [...state.selectedCourses, payload],
      }
    case REMOVE_SELECTED_COURSE:
      return {
        ...state,
        selectedCourses: state.selectedCourses.filter(course => course !== payload),
      }
    case REMOVE_SELECTED_COURSES:
      return {
        ...state,
        selectedCourses: []
      }
    case CLEAR_SKIP:
      return {
        ...state,
        skip: 0
      }
    case CLEAR_SEARCH_TEXT:
      return {
        ...state,
        searchText: ''
      }
    case CLEAR_AVAILABLE_COURSES:
      return {
        ...state,
        coursesBySchool: []
      }
    case LOAD_MORE_FAILURE:
      return { ...state }
    case LOAD_MORE_SUCCESS:
      return {
        ...state,
        coursesBySchool: [...state.coursesBySchool, ...payload.courses],
        skip: payload.skip
      }
    default:
      break;
  }
  return state;
}

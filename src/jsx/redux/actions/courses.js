import axios from 'axios';
import {
	GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
	ADD_SELECTED_COURSE,
  REMOVE_SELECTED_COURSE,
  CLEAR_SKIP,
  CLEAR_SEARCH_TEXT,
  LOAD_MORE_SUCCESS,
  LOAD_MORE_FAILURE
} from './types';
const ROOT_URL = 'https://zengjintaotest.com/api';

const getCourses = (searchText, universityID) => {
  return dispatch => {
    axios.get(`${ROOT_URL}/course?q=${searchText}&limit=10&skip=0&univ=${universityID}`)
      .then(res => {
        dispatch({
          type: GET_COURSES_SUCCESS,
          payload: {
            courses: res.data,
            searchText: searchText
          }
        })
      })
      .catch(error => {
        dispatch({ type: GET_COURSES_FAILURE })
      })
  }
}

const addSelectedCourse = (course) => {
  return dispatch => {
    dispatch({
      type: ADD_SELECTED_COURSE,
      payload: course
    })
  }
}

const removeSelectedCourse = (course) => {
  return dispatch => {
    dispatch({
      type: REMOVE_SELECTED_COURSE,
      payload: course
    })
  }
}

const loadMoreCourses = (searchText, universityID, skip) => {
  return dispatch => {
    axios.get(`${ROOT_URL}/course?q=${searchText}&limit=10&skip=${skip}&univ=${universityID}`)
      .then(res => {
        dispatch({
          type: LOAD_MORE_SUCCESS,
          payload: {
            courses: res.data,
            skip: skip
          }
        })
      })
      .catch(error => {
        dispatch({ type: LOAD_MORE_FAILURE })
      })
  }
}

const clearSkip = () => {
  return dispatch => {
    dispatch({ type: CLEAR_SKIP })
  }
}

const clearSearchText = () => {
  return dispatch => {
    dispatch({ type: CLEAR_SEARCH_TEXT })
  }
}

module.exports = {
  clearSearchText,
  clearSkip,
  loadMoreCourses,
  getCourses,
  addSelectedCourse,
  removeSelectedCourse
}

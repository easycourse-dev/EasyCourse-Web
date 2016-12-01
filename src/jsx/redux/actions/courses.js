import axios from 'axios';
import store from '../store';
import {
	GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
	ADD_SELECTED_COURSE,
	REMOVE_SELECTED_COURSE
} from './types';
const ROOT_URL = 'https://zengjintaotest.com/api';

export const getCourses = (searchText, universityID) => {
  if (searchText.length < 2) {
    console.log('Need more text to search');
  } else {
    axios.get(`${ROOT_URL}/course?q=${searchText}&limit=10&skip=0&univ=${universityID}`)
      .then(res => {
        store.dispatch({
          type: GET_COURSES_SUCCESS,
          payload: res.data
        })
      })
      .catch(error => {
        store.dispatch({
          type: GET_COURSES_FAILURE
        })
      });
  }
}

export const addSelectedCourse = (course) => {
	store.dispatch({
		type: ADD_SELECTED_COURSE,
		payload: course
	})
}

export const removeSelectedCourse = (course) => {
	store.dispatch({
		type: REMOVE_SELECTED_COURSE,
		payload: course
	})
}

import axios from 'axios';
import {
	GET_UNIVERSITIES_SUCCESS,
  GET_UNIVERSITIES_FAILURE,
	ADD_SELECTED_UNIVERSITY,
	REMOVE_SELECTED_UNIVERSITY
} from './types';
const ROOT_URL = 'https://zengjintaotest.com/api';

const getUniversities = () => {
  return dispatch => {
    axios.get(`${ROOT_URL}/univ`)
      .then(res => {
        dispatch({
          type: GET_UNIVERSITIES_SUCCESS,
          payload: res.data
        })
      })
      .catch(error => {
        dispatch({
          type: GET_UNIVERSITIES_FAILURE
        })
      })
  }
}

const addSelectedUniversity = (universityId) => {
	return dispatch => {
		dispatch({ type: ADD_SELECTED_UNIVERSITY, payload: universityId })
	}
}

const removeSelectedUniversity = () => {
	return dispatch => {
		dispatch({ type: REMOVE_SELECTED_UNIVERSITY })
	}
}

module.exports = {
  getUniversities,
	addSelectedUniversity,
	removeSelectedUniversity
}

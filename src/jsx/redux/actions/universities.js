import axios from 'axios';
import {
	GET_UNIVERSITIES_SUCCESS,
  GET_UNIVERSITIES_FAILURE
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

module.exports = {
  getUniversities
}

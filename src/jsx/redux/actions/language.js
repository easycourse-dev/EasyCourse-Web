import axios from 'axios'
import {
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_FAILURE,
  ADD_SELECTED_LANGUAGE,
  REMOVE_SELECTED_LANGUAGE,
} from './types'

const ROOT_URL = 'https://zengjintaotest.com/api';

const getLanguages = () => {
  return dispatch => {
    axios.get(`${ROOT_URL}/defaultlanguage`)
    .then(res => {
      dispatch({
        type: GET_LANGUAGES_SUCCESS,
        payload: res.data
      })
    })
    .catch(error => {
      dispatch({ type: GET_LANGUAGES_FAILURE, payload: error })
    })
  }
}

const addSelectedLanguage = (language) => {
  return dispatch => {
    dispatch({
      type: ADD_SELECTED_LANGUAGE,
      payload: language
    })
  }
}

const removeSelectedLanguage = (language) => {
  return dispatch => {
    dispatch({
      type: REMOVE_SELECTED_LANGUAGE,
      payload: language
    })
  }
}

module.exports = {
  getLanguages,
  addSelectedLanguage,
  removeSelectedLanguage
}

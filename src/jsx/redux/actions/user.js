import axios from 'axios'
import store from '../store'
import { browserHistory } from 'react-router'
import {
	USER_SIGNUP_SUCCESS,
	USER_SIGNUP_FAILURE,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILURE,
	USER_LOGOUT,
	USER_INITIAL_SIGNUP_FAILURE,
	USER_INITIAL_SIGNUP_SUCCESS,
	SIGNUP_SETUP_CHOOSE_UNIVERSITY,
	SIGNUP_SETUP_CHOOSE_COURSES,
} from './types'

const ROOT_URL = 'https://zengjintaotest.com/api'

const signup = ({email, password, displayName}) => {
  return dispatch => {
    axios.post(`${ROOT_URL}/signup`,{ email, password, displayName })
      .then(res => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: res.data
        })
        dispatch({ type: USER_INITIAL_SIGNUP_SUCCESS })
        localStorage.setItem('authToken', res.headers.auth)
      })
      .catch(error => {
        dispatch({
          type: USER_SIGNUP_FAILURE,
          payload: 'Unable to signup user'
        })
        dispatch({ type: USER_INITIAL_SIGNUP_FAILURE })
      })
  }
}

const login = ({email, password}) => {
  return dispatch => {
    axios.post(`${ROOT_URL}/login`, {email, password})
      .then(res => {
        dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data })
        if (res.data.joinedRoom.length === 0) {
          dispatch({ type: USER_INITIAL_SIGNUP_SUCCESS })
          browserHistory.push('/signin')
        } else {
          browserHistory.push('/')
        }
        localStorage.setItem('authToken', res.headers.auth)
      })
      .catch(error => {
        dispatch({
          type: USER_LOGIN_FAILURE,
          payload: error
        })
      })
  }
}

const logout = () => {
  return dispatch => {
    store.dispatch({ type: USER_LOGOUT, payload: null })
    localStorage.removeItem('authToken')
    browserHistory.push('/')
  }
}

const signUpSetUpChooseUniversity = (schoolID, stage) => {
  return dispatch => {
    dispatch({
      type: SIGNUP_SETUP_CHOOSE_UNIVERSITY,
      payload: {
        schoolID,
        stage
      }
    })
  }
}

const signUpSetUpChooseCourses = (selectedCourses, stage) => {
  return dispatch => {
    dispatch({
      type: SIGNUP_SETUP_CHOOSE_COURSES,
      payload: {
        selectedCourses,
        stage
      }
    })
  }
}

module.exports = {
  signup,
  login,
  logout,
  signUpSetUpChooseUniversity,
  signUpSetUpChooseCourses
}

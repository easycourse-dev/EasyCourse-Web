import axios from 'axios'
import io from 'socket.io-client'
import { browserHistory } from 'react-router'
import {
	USER_SIGNUP_SUCCESS,
	USER_SIGNUP_FAILURE,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILURE,
	USER_LOGOUT,
	USER_INITIAL_SIGNUP_FAILURE,
	USER_INITIAL_SIGNUP_SUCCESS,
	CHANGE_SIGNUP_STAGE,
	REMOVE_SELECTED_UNIVERSITY,
	REMOVE_SELECTED_COURSES,
	CLEAR_SEARCH_TEXT,
	CLEAR_AVAILABLE_COURSES,
  UPDATE_USER_UNIV_SUCCESS,
  UPDATE_USER_UNIV_FAILURE,
  JOIN_COURSE_SUCCESS,
  JOIN_COURSE_FAILURE,
} from './types'

const ROOT_URL = 'https://www.easycourseserver.com/api'

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
    dispatch({ type: USER_LOGOUT, payload: null })
    localStorage.removeItem('authToken')
    browserHistory.push('/')
  }
}

const clearVaules = (dispatch) => {
	dispatch({ type: REMOVE_SELECTED_COURSES })
	dispatch({ type: CLEAR_SEARCH_TEXT })
	dispatch({ type: REMOVE_SELECTED_UNIVERSITY })
	dispatch({ type: CLEAR_AVAILABLE_COURSES })
}

const clearSearchText = (dispatch) => {
	dispatch({ type: CLEAR_SEARCH_TEXT })
}

const changeSignupStage = (stage) => {
	return dispatch => {
		if (stage === 1) {
			clearVaules(dispatch)
			dispatch({ type: CHANGE_SIGNUP_STAGE, payload: stage })
		} else if (stage === 2){
			clearSearchText(dispatch)
			dispatch({ type: CHANGE_SIGNUP_STAGE, payload: stage })
		} else {
			dispatch({ type: CHANGE_SIGNUP_STAGE, payload: stage })
		}
	}
}

// update the user's joinedCourse's and languages the user speaks
const updateUserCourseAndLang = (courses, languages, dispatch) => {
  let authToken = localStorage.getItem('authToken')
  let coursesIdArray = []
  let languagesCodeArray = []
  for (let i = 0; i < courses.length; i++) {
    let id = courses[i]._id
    coursesIdArray.push(id)
  }
  console.log('coursesArray: ', coursesIdArray)

  for (let i = 0; i < languages.length; i++) {
    let code = languages[i].code
    languagesCodeArray.push(code)
  }
  console.log('languagesArray: ', languagesCodeArray)

  let socket = io.connect('https://www.easycourseserver.com/', {query: `token=${authToken}`})
  let newData = {courses: coursesIdArray, lang: languagesCodeArray}

  socket.on('connect', () => {
    socket.emit('joinCourse', newData, (data, error) => {
      if (data) {
        dispatch({ type: JOIN_COURSE_SUCCESS, payload: data })
				browserHistory.push('/')
      } else {
        dispatch({ type: JOIN_COURSE_FAILURE, payload: error })
      }
    })
  })
}


const finishSignup = (universityId, selectedLanguages, selectedCourses, displayName) => {
  return dispatch => {
    const authToken = localStorage.getItem('authToken')

    const config = { headers: {"auth": authToken} }
    const body = { university: universityId }

    axios.post(`${ROOT_URL}/user/update`, body, config)
	    .then(res => {
	      dispatch({ type: UPDATE_USER_UNIV_SUCCESS, payload: res })
	      updateUserCourseAndLang(selectedCourses, selectedLanguages, dispatch)
	    })
	    .catch(error => {
	      dispatch({ type: UPDATE_USER_UNIV_FAILURE, payload: error })
	    })
  }
}

module.exports = {
  signup,
  login,
  logout,
  changeSignupStage,
  finishSignup
}

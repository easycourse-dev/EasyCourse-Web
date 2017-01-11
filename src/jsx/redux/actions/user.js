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
	SIGNUP_SETUP_CHOOSE_UNIVERSITY,
  SIGNUP_SETUP_CHOOSE_COURSES,
  SIGNUP_SETUP_CHOOSE_LANGUAGES,
  UPDATE_USER_UNIV_SUCCESS,
  UPDATE_USER_UNIV_FAILURE,
  JOIN_COURSE_SUCCESS,
  JOIN_COURSE_FAILURE,
	UPDATE_PASSWORD
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
    dispatch({ type: USER_LOGOUT, payload: null })
    localStorage.removeItem('authToken')
    browserHistory.push('/')
  }
}

const signUpSetUpChooseUniversity = (universityId, stage) => {
  return dispatch => {
    dispatch({
      type: SIGNUP_SETUP_CHOOSE_UNIVERSITY,
      payload: {
        universityId,
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

const signUpSetUpChooseLanguages = (selectedLanguages) => {
  return dispatch => {
    dispatch({
      type: SIGNUP_SETUP_CHOOSE_LANGUAGES,
      payload: selectedLanguages
    })
  }
}

// update the user's joinedCourse's and languages the user speaks
const updateUserCourseAndLang = (courses, languages, dispatch) => {
  let authToken = localStorage.getItem('authToken')
  let coursesArray = []
  let languagesArray = []
  for (let i = 0; i < courses.length; i++) {
    let id = courses[i]._id
    coursesArray.push(id)
  }
  console.log('coursesArray: ', coursesArray)
  for (let i = 0; i < languages.length; i++) {
    let code = languages[i].code
    languagesArray.push(code)
  }
  console.log('languagesArray: ', languagesArray)
  let socket = io.connect('https://zengjintaotest.com/', {query: `token=${authToken}`})
  let newData = {courses: coursesArray, lang: languagesArray}

  socket.on('connect', () => {
    socket.emit('joinCourse', newData, (data, error) => {
      if (data) {
        dispatch({ type: JOIN_COURSE_SUCCESS, payload: data })
      } else {
        dispatch({ type: JOIN_COURSE_FAILURE, payload: error })
      }
    })
  })
}


const finishSignup = (languages, courses, universityId, selectedLanguages, displayName) => {
  return dispatch => {
    const authToken = localStorage.getItem('authToken')

    const config = { headers: {"auth": authToken} }
    const body = { university: universityId }
    // update user's university
    axios.post(`${ROOT_URL}/user/update`, body, config)
    .then(res => {
      dispatch({ type: UPDATE_USER_UNIV_SUCCESS, payload: res })
      updateUserCourseAndLang(courses, languages, dispatch)
    })
    .catch(error => {
      dispatch({ type: UPDATE_USER_UNIV_FAILURE, payload: error })
    })
  }
}

const updatePassword = (password, passwordConfirmation, token) => {
  return dispatch => {
		console.log('Password: ', password, 'Token: ', token)
    const config = { headers: {"auth": token} }
    const body = {newPassword: password}
    axios.post(`${ROOT_URL}/resetPassword`, body, config)
    .then(res => {
     dispatch({ type: UPDATE_PASSWORD, payload: res })
    })
    .catch(error => {
     dispatch({ type: UPDATE_PASSWORD, payload: error })
    })
	}
}

module.exports = {
  signup,
  login,
  logout,
  signUpSetUpChooseUniversity,
  signUpSetUpChooseCourses,
  signUpSetUpChooseLanguages,
  finishSignup,
	updatePassword
}

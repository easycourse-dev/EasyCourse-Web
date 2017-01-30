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
	USER_AUTHENTICATE_FAILURE,
	CHANGE_SIGNUP_STAGE,
	REMOVE_SELECTED_UNIVERSITY,
	REMOVE_SELECTED_COURSES,
	CLEAR_SEARCH_TEXT,
	CLEAR_AVAILABLE_COURSES,
  UPDATE_USER_UNIV_SUCCESS,
  UPDATE_USER_UNIV_FAILURE,
  JOIN_COURSE_SUCCESS,
  JOIN_COURSE_FAILURE,
	UPDATE_PASSWORD,
	VALIDATE_TOKEN_SUCCESS,
	VALIDATE_TOKEN_FAILURE,
	UPDATE_ACTIVE_ROOM
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
          browserHistory.push('/home')
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

const dispatchLogout = (dispatch) => {
	dispatch({ type: USER_LOGOUT, payload: null })
	dispatch({ type: USER_AUTHENTICATE_FAILURE })
}

const logout = () => {
  return dispatch => {
		dispatchLogout(dispatch)
    localStorage.removeItem('authToken')
    browserHistory.push('/public')
  }
}

const clearValues = (dispatch) => {
	dispatch({ type: REMOVE_SELECTED_COURSES })
	dispatch({ type: CLEAR_SEARCH_TEXT })
	dispatch({ type: REMOVE_SELECTED_UNIVERSITY })
	dispatch({ type: CLEAR_AVAILABLE_COURSES })
}

const clearSelectedCourses = (dispatch) => {
	dispatch({ type: REMOVE_SELECTED_COURSES })
}

const clearSearchText = (dispatch) => {
	dispatch({ type: CLEAR_SEARCH_TEXT })
}

const changeSignupStage = (stage) => {
	return dispatch => {
		if (stage === 1) {
			clearValues(dispatch)
			dispatch({ type: CHANGE_SIGNUP_STAGE, payload: stage })
		} else if (stage === 2){
			clearSearchText(dispatch)
			clearSelectedCourses(dispatch)
			dispatch({ type: CHANGE_SIGNUP_STAGE, payload: stage })
		} else {
			dispatch({ type: CHANGE_SIGNUP_STAGE, payload: stage })
		}
	}
}

// TODO: update this function by passing the already connected socket to the function
// update the user's joinedCourse's and languages the user speaks
function updateUserCourses(courses, dispatch) {
  let authToken = localStorage.getItem('authToken')
  let coursesIdArray = []

	for (let i = 0; i < courses.length; i++) {
    let id = courses[i]._id
    coursesIdArray.push(id)
  }

  let socket = io.connect('https://zengjintaotest.com/', {query: `token=${authToken}`})
  let newData = {courses: coursesIdArray}

  socket.on('connect', () => {
    socket.emit('joinCourse', newData, (data, error) => {
      if (data) {
        dispatch({ type: JOIN_COURSE_SUCCESS, payload: data })
				browserHistory.push('/home')
      } else {
        dispatch({ type: JOIN_COURSE_FAILURE, payload: error })
      }
    })
  })

}

const finishSignup = (universityId, selectedCourses, displayName) => {
  return dispatch => {
    const authToken = localStorage.getItem('authToken')

    const config = { headers: {"auth": authToken} }
    const body = { university: universityId }

    axios.post(`${ROOT_URL}/user/update`, body, config)
	    .then(res => {
	      updateUserCourses(selectedCourses, dispatch)
	      dispatch({ type: UPDATE_USER_UNIV_SUCCESS, payload: res })
	    })
	    .catch(error => {
	      dispatch({ type: UPDATE_USER_UNIV_FAILURE, payload: error })
	    })
  }
}

const resetPassword = (password, passwordConfirmation, token) => {
  return dispatch => {
    const config = { headers: {"auth": token} }
    const body = {newPassword: password}
    axios.post(`${ROOT_URL}/resetPassword`, body, config)
    .then(res => {
     dispatch({ type: UPDATE_PASSWORD, payload: res.status })
    })
    .catch(error => {
     dispatch({ type: UPDATE_PASSWORD, payload: error })
    })
	}
}

const validateToken = (token) => {
	return dispatch => {
		const config = { headers: {"auth": token} }
		const body = {}
		axios.post(`${ROOT_URL}/validateToken`, body, config)
			.then(res => {
				dispatch({ type: VALIDATE_TOKEN_SUCCESS, payload: res })
			})
			.catch(error => {
				dispatch({ type: VALIDATE_TOKEN_FAILURE, payload: error })
			})
	}
}

const updateActiveRoom = (roomId) => {
	return dispatch => {
		dispatch({
			type: UPDATE_ACTIVE_ROOM,
			payload: roomId
		})
	}
}

module.exports = {
  signup,
  login,
  logout,
  changeSignupStage,
  finishSignup,
  resetPassword,
  validateToken,
	updateActiveRoom
}

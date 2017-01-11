import {
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_INITIAL_SIGNUP_SUCCESS,
  USER_INITIAL_SIGNUP_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  USER_AUTHENTICATE_SUCCESS,
  USER_AUTHENTICATE_FAILURE,
  SIGNUP_SETUP_CHOOSE_UNIVERSITY,
  SIGNUP_SETUP_CHOOSE_COURSES,
  SIGNUP_SETUP_CHOOSE_LANGUAGES,
  UPDATE_USER_UNIV_SUCCESS,
  UPDATE_USER_UNIV_FAILURE,
  JOIN_COURSE_SUCCESS,
  JOIN_COURSE_FAILURE,
} from '../actions/types';

const initialState = {
  authenticated: false,
  loggedIn: false,
  current_user: '',
  initialSignUpComplete: false,
  signUpStage: 0,
  universityId: '',
  courses: [],
  languages: [],
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_AUTHENTICATE_SUCCESS:
      return {
        ...state,
        authenticated: true,
        current_user: action.payload
      };
    case USER_AUTHENTICATE_FAILURE:
      return {
        ...state,
        authenticated: false,
        current_user: ''
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        current_user: action.payload
      };
    case USER_SIGNUP_FAILURE:
      return {
        ...state,
        current_user: '',
        error: 'USER_SIGNUP_FAILURE'
      };
    case USER_INITIAL_SIGNUP_SUCCESS:
      return {
        ...state,
        initialSignUpComplete: true,
        signUpStage: 1,
      }
    case USER_INITIAL_SIGNUP_FAILURE:
      return {
        ...state,
        initialSignUpComplete: false
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        current_user: action.payload
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        current_user: '',
        error: 'USER_LOGIN_FAILURE'
      };
    case USER_LOGOUT:
      return {
        ...state,
        current_user: '',
        signUpStage: 0
      };
    case SIGNUP_SETUP_CHOOSE_UNIVERSITY:
      return {
        ...state,
        universityId: action.payload.universityId,
        signUpStage: action.payload.stage,
      }
    case SIGNUP_SETUP_CHOOSE_COURSES:
      return {
        ...state,
        courses: action.payload.selectedCourses,
        signUpStage: action.payload.stage,
      }
    case SIGNUP_SETUP_CHOOSE_LANGUAGES:
      return {
        ...state,
        languages: action.payload
      }
    case UPDATE_USER_UNIV_SUCCESS:
      return {
        ...state,
        message: 'Updated user university'
      }
    case UPDATE_USER_UNIV_FAILURE:
      return {
        ...state,
        message: 'Unable to update user university'
      }
    case JOIN_COURSE_SUCCESS:
      return {
        ...state,
        response: action.payload
      }
    case JOIN_COURSE_FAILURE:
      return {
        ...state,
        response: action.payload
      }
    default:
      return {
        ...state,
        authenticated: false
      };
  }
}

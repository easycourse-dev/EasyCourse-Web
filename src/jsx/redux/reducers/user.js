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
SIGNUP_SETUP_CHOOSEN_UNIVERSITY,
} from '../actions/types';

const initialState = {
  authenticated: false,
  loggedIn: false,
  current_user: '',
  initialSignUpComplete: false,
  postInitialSignUpValues: {
    school: '',
    classes: [],
    languages: [],
  }
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        current_user: action.payload
      };
    case USER_SIGNUP_FAILURE:
      return {
        ...state,
        current_user: '',
        error: 'USER_AUTHENTICATE_FAILURE'
      };
    case USER_INITIAL_SIGNUP_SUCCESS:
      return {
        ...state,
        initialSignUpComplete: true
      }
    case USER_INITIAL_SIGNUP_FAILURE:
      return {
        ...state,
        initialSignUpComplete: false
      }
    case SIGNUP_SETUP_CHOOSEN_UNIVERSITY:
      return {
        ...state,
        postInitialSignUpValues: {
          school: action.payload
        }
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
        current_user: ''
      };
    case USER_AUTHENTICATE_SUCCESS:
      return {
        ...state,
        authenticated: true
      };
    case USER_AUTHENTICATE_FAILURE:
      return {
        ...state,
        authenticated: false
      };
    default:
      return {
        ...state,
        authenticated: false
      };
  }
}

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
  CHANGE_SIGNUP_STAGE,
  UPDATE_USER_UNIV_SUCCESS,
  UPDATE_USER_UNIV_FAILURE,
  JOIN_COURSE_SUCCESS,
  JOIN_COURSE_FAILURE,
  UPDATE_PASSWORD,
  VALIDATE_TOKEN_SUCCESS,
	VALIDATE_TOKEN_FAILURE,
  UPDATE_ACTIVE_ROOM
} from '../actions/types';

const initialState = {
  authenticated: false,
  loggedIn: false,
  current_user: '',
  initialSignUpComplete: false,
  signUpStage: 0,
  activeRoom: ''
}

export default function userReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case USER_AUTHENTICATE_SUCCESS:
      return {
        ...state,
        authenticated: true,
        current_user: payload
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
        current_user: payload
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
        current_user: payload,
        authenticated: true
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
    case CHANGE_SIGNUP_STAGE:
      return {
        ...state,
        signUpStage: payload
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
        response: payload
      }
    case JOIN_COURSE_FAILURE:
      return {
        ...state,
        response: payload
      }
    case UPDATE_PASSWORD:
      return {
        ...state,
        response: payload
      }
    case VALIDATE_TOKEN_SUCCESS:
      return {
        ...state,
        validateTokenResponseSuccess: payload
      }
    case VALIDATE_TOKEN_FAILURE:
      return {
        ...state,
        validateTokenResponseError: payload
      }
    case UPDATE_ACTIVE_ROOM:
      return {
        ...state,
        activeRoom: payload
      }
    default:
      return {
        ...state,
        authenticated: false
      };
  }
}

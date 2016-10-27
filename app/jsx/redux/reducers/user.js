import {
	USER_AUTHENTICATE_SUCCESS,
	USER_AUTHENTICATE_FAILURE,
	USER_SIGNUP_SUCCESS,
	USER_SIGNUP_FAILURE,
	USER_LOGIN_START,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILURE,
	USER_LOGOUT,
} from '../actions/types';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_AUTHENTICATE_SUCCESS:
    	return {
      	...state,
      	current_user: action.payload
    	};
    case USER_AUTHENTICATE_FAILURE:
      return {
        ...state,
        error_type: 'USER_AUTHENTICATE_FAILURE',
        error_message: action.payload
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        current_user: action.payload
      };
    case USER_SIGNUP_FAILURE:
      return {
        ...state,
        error_type: 'USER_SIGNUP_FAILURE',
        error_message: action.payload
    } ;
    case USER_LOGIN_START:
      return {
        ...state,
        current_user: action.payload
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        current_user: action.payload
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        error_type: 'USER_LOGIN_FAILURE',
        error_message: action.payload
      };
    case USER_LOGOUT:
      return {
        ...state,
        current_user: action.payload
      };
    default:
      return state;
  }
  return state;
}

export default userReducer;

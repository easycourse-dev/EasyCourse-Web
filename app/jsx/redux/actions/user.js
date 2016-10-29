import {
	USER_AUTHENTICATE_SUCCESS,
	USER_AUTHENTICATE_FAILURE,
	USER_SIGNUP_SUCCESS,
	USER_SIGNUP_FAILURE,
	USER_LOGIN_START,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILURE,
	USER_LOGOUT,
} from './types';

import axios from 'axios';

const ROOT_URL = 'https://zengjintaotest.com/api';

export function signup(email, password, displayName) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email, password, displayName})
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

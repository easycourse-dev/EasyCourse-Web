import axios from 'axios';
import store from '../store';
import {
	USER_SIGNUP_SUCCESS,
	USER_SIGNUP_FAILURE,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILURE,
	USER_LOGOUT,
} from './types';

const ROOT_URL = 'https://zengjintaotest.com/api';

export function signup({email, password, displayName}) {
  axios.post(`${ROOT_URL}/signup`,{ email, password, displayName })
    .then(res => {
      store.dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: res.data
      });

      localStorage.setItem('authToken', res.headers.auth);
    })
    .catch(error => {
      store.dispatch({
        type: USER_SIGNUP_FAILURE,
        payload: error
      });
    });
}

export function login({email, password}) {
  axios.post(`${ROOT_URL}/login`, {email, password})
    .then(res => {
      store.dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data
      });

      // store authToken in localStorage
      localStorage.setItem('authToken', res.headers.auth);
    })
    .catch(error => {
      store.dispatch({
        type: USER_LOGIN_FAILURE,
        payload: error
      });
    });
}

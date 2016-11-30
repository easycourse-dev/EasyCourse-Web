import axios from 'axios';
import store from '../store';
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
} from './types';

const ROOT_URL = 'https://zengjintaotest.com/api';

export function signup({email, password, displayName}) {
  axios.post(`${ROOT_URL}/signup`,{ email, password, displayName })
    .then(res => {
      store.dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: res.data
      });
			store.dispatch({
        type: USER_INITIAL_SIGNUP_SUCCESS
      });
      localStorage.setItem('authToken', res.headers.auth);
    })
    .catch(error => {
      store.dispatch({
        type: USER_SIGNUP_FAILURE,
        payload: 'Unable to signup user'
      });
			store.dispatch({
        type: USER_INITIAL_SIGNUP_FAILURE
      });
    });
}

export function login({email, password}) {
  axios.post(`${ROOT_URL}/login`, {email, password})
    .then(res => {
			console.log(res.data);
			let user = res.data;
			store.dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: user
      });
			if (user.joinedRoom.length === 0) {
				store.dispatch({
					type: USER_INITIAL_SIGNUP_SUCCESS,
				})
				browserHistory.push('/signin');
			} else {
				browserHistory.push('/');
			}
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

export function logout() {
	store.dispatch({
		type: USER_LOGOUT,
		payload: null
	});

  // Remove authToken to logout
  localStorage.removeItem('authToken');
	// jump back to homepage
	browserHistory.push('/');
}

export function signUpSetUpChooseUniversity(schoolID) {
  store.dispatch({
  		type: SIGNUP_SETUP_CHOOSE_UNIVERSITY,
  		payload: schoolID
  });
}

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
	USER_UPDATE_SUCCESS,
	USER_UPDATE_FAILURE,
	SIGNUP_SETUP_CHOOSEN_UNIVERSITY
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
      store.dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data
      });

      // store authToken in localStorage
      localStorage.setItem('authToken', res.headers.auth);

			// jump back to homepage
			browserHistory.push('/');
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

export function signUpSetUp({university}) {
	store.dispatch({
		type: SIGNUP_SETUP_CHOOSEN_UNIVERSITY,
		payload: university
	});
	const authToken = localStorage.getItem('authToken');
	axios.post(`${ROOT_URL}/update/user`,
		{university},
		headers: {auth: authToken}
	)
	.then(res => {
		store.dispatch({
			type: USER_UPDATE_SUCCESS,
			payload: res.data
		})
	})
	.catch(error => {
		store.dispatch({
			type: USER_UPDATE_FAILURE,
			payload: 'Unable to update user'
		})
	});
}

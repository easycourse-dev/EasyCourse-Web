import axios from 'axios';
import store from '../store';
import {
	GET_UNIVERSITIES_SUCCESS,
  GET_UNIVERSITIES_FAILURE
} from './types';
const ROOT_URL = 'https://zengjintaotest.com/api';

export function getUniversities() {
	axios.get(`${ROOT_URL}/univ`)
		.then(res => {
			store.dispatch({
				type: GET_UNIVERSITIES_SUCCESS,
				payload: res.data
			})
		})
		.catch(error => {
			console.log('Get Universities Failed: ', error);
			store.dispatch({
				type: GET_UNIVERSITIES_FAILURE
			})
		});
}

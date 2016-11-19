import axios from 'axios';
import store from '../store';
import {
	GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE
} from './types';
const ROOT_URL = 'https://zengjintaotest.com/api';

export function getCourses(searchText, universityID) {
	axios.get(`${ROOT_URL}/course?q=${searchText}&limit=10&skip=10&univ=${universityID}`)
		.then(res => {
      console.log(res.data);
			store.dispatch({
				type: GET_COURSES_SUCCESS,
				payload: res.data
			})
		})
		.catch(error => {
      console.log(error);
			console.log('Get Courses Failed: ', error);
			store.dispatch({
				type: GET_COURSES_FAILURE
			})
		});
}

// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './jsx/redux/store'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import io from 'socket.io-client'

// Components
import './index.css';
import App from './App';

import Public from './jsx/public'
import Home from './jsx/home'
import SignIn from './jsx/signin'
import Docs from './jsx/docs'
import Privacy from './jsx/components/public/privacy'
import Terms from './jsx/components/public/terms'
import ForgotPassword from './jsx/forgotPassword'

import Course from './jsx/components/home/course'
import Room from './jsx/components/home/room'



import {
  USER_AUTHENTICATE_SUCCESS,
  USER_AUTHENTICATE_FAILURE,
  USER_INITIAL_SIGNUP_SUCCESS,
} from './jsx/redux/actions/types'


if (localStorage.getItem('authToken')) {
  let authToken = localStorage.getItem('authToken')
  let socket = io.connect('https://zengjintaotest.com/', { query: `token=${authToken}` })
  socket.on('connect', () => {
    socket.emit('syncUser', 1, (data, error) => {
      if (data.user.joinedRoom.length === 0) {
        store.dispatch({ type: USER_INITIAL_SIGNUP_SUCCESS })
        store.dispatch({
          type: USER_AUTHENTICATE_SUCCESS,
          payload: data.user
        })
        browserHistory.push('/signin');
      } else {
        store.dispatch({
          type: USER_AUTHENTICATE_SUCCESS,
          payload: data.user
        })
        browserHistory.push('/home');
      }
    })
  })
} else {
  store.dispatch({ type: USER_AUTHENTICATE_FAILURE })
  browserHistory.push('/public');
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <Route path="public" component={Public} />
        <Route path="home" component={Home}>
          <Route path="course/:courseName" component={Course}>
            <Route path="room/:roomName" component={Room} />
          </Route>
        </Route>
        <Route path="signin" component={SignIn} />
        <Route path="docs" component={Docs} >
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
        </Route>
        <Route path="forgotPassword" component={ForgotPassword} />
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

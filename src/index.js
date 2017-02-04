// Dependencies
import {
  USER_AUTHENTICATE_SUCCESS,
  USER_AUTHENTICATE_FAILURE,
  USER_INITIAL_SIGNUP_SUCCESS,
  SOCKET_CONNECTED,
  UPDATE_ACTIVE_ROOM
} from './jsx/redux/actions/types'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { applyMiddleware, createStore, compose } from 'redux';
import { loadRouteState, saveRouteState } from './localStorage'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'
import rootReducer from './jsx/redux/reducers/index';
const middleware = applyMiddleware(promise(), thunk);
const persistedRoutes = loadRouteState()
const enhancers = compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
const store = createStore(rootReducer, persistedRoutes, enhancers);
const history = syncHistoryWithStore(browserHistory, store)

import { Router, Route } from 'react-router';
import io from 'socket.io-client'
import messageActions from './jsx/redux/actions/messages'

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

store.subscribe(() => {
  saveRouteState({
    routing: store.getState().routing
  })
})

function getRoom(rooms, urlRoomName) {
  return rooms.filter(room => room.name === urlRoomName)
}

if (localStorage.getItem('authToken')) {

  // get the current url and parse for course and room (bookmarked urls)
  const urlPathArray = window.location.pathname.split('/')
  let savedCourse = ''
  let savedRoom = ''
  let initialPath = ''
  let room = ''
  if (urlPathArray.length === 6) {
    savedCourse = urlPathArray[3]
    savedRoom = urlPathArray[5]
    initialPath = `/home/course/${savedCourse}/room/${savedRoom}`
  }

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

        store.dispatch({
          type: SOCKET_CONNECTED,
          payload: socket
        })

        store.dispatch({
          type: UPDATE_ACTIVE_ROOM,
          payload: data.user.joinedRoom[0]._id
        })

        const routing = store.getState().routing

        if (initialPath.length < 1) {
          initialPath = routing.locationBeforeTransitions.pathname
          if (initialPath === '/') {
            initialPath = '/home'
          }
          browserHistory.push(`${initialPath}`);
          console.log('pushed to initialPath 1')
        } else {
          room = getRoom(data.user.joinedRoom, savedRoom)
          store.dispatch(messageActions.loadMessages(room[0]._id, socket))
          browserHistory.push(`${initialPath}`)
        }
      }
    })
  })
} else {
  store.dispatch({ type: USER_AUTHENTICATE_FAILURE })
  browserHistory.push('/public');
}



ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
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

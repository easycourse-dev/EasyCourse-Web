// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './jsx/redux/store'
import { Router, Route, IndexRoute } from 'react-router';
// import { browserHistory } from 'react-router'
// import io from 'socket.io-client'
// Components
import './index.css';
import App from './App';
import Public from './jsx/public'
import Home from './jsx/home'
import Docs from './jsx/docs'
import Privacy from './jsx/components/privacy'
import Terms from './jsx/components/terms'
// import SignIn from './jsx/signin'
import ForgotPassword from './jsx/forgotPassword'
// Other
// import {
// USER_AUTHENTICATE_SUCCESS,
// USER_AUTHENTICATE_FAILURE,
// USER_INITIAL_SIGNUP_SUCCESS,
// } from './jsx/redux/actions/types'

function getHomeComponent() {
  if (localStorage.getItem('authToken')) {
    return (<Home />)
  }
  return (<Public />)
}


// if (localStorage.getItem('authToken')) {
//   let authToken = localStorage.getItem('authToken')
//   let socket = io.connect('https://zengjintaotest.com/', { query: `token=${authToken}` })
//   socket.on('connect', () => {
//     socket.emit('syncUser', 1, (data, error) => {
//       console.log('Connected User: ', data.user);
//       if (data.user.joinedRoom.length === 0) {
//         store.dispatch({ type: USER_INITIAL_SIGNUP_SUCCESS })
//         browserHistory.push('/signin');
//       } else {
//         store.dispatch({
//           type: USER_AUTHENTICATE_SUCCESS,
//           payload: data.user
//         })
//         browserHistory.push('/');
//       }
//     })
//   })
// } else {
//   store.dispatch({ type: USER_AUTHENTICATE_FAILURE })
//   browserHistory.push('/');
// }


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
        <IndexRoute component={getHomeComponent} />
        {/* <Route path="signin" component={SignIn} /> */}
        <Route path="forgotPassword/:token" component={ForgotPassword} />
        <Route path="docs" >
          <IndexRoute component={Docs} />
          <Route path="privacy" component={Privacy} />
          <Route path="terms" component={Terms} />
        </Route>
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

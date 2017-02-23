import { combineReducers } from 'redux'

// Reducers
import { routerReducer } from 'react-router-redux'
import userReducer from './user'
import navbarLinksReducer from './navbarLinks'
import universityReducer from './universities'
import coursesReducer from './courses'
import socketReducer from './socket'
import messagesReducer from './messages'
import settingsReducer from './settings'
import language from './language'
import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  settings: settingsReducer,
  navbarLinks: navbarLinksReducer,
  university: universityReducer,
  courses: coursesReducer,
  socket: socketReducer,
  messages: messagesReducer,
  form: form,
  language: language
})

export default rootReducer

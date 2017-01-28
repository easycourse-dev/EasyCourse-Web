import { combineReducers } from 'redux'

// Reducers
import { routerReducer } from 'react-router-redux'
import userReducer from './user'
import navbarLinksReducer from './navbarLinks'
import universityReducer from './universities'
import coursesReducer from './courses'
import socketReducer from './socket'
import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  navbarLinks: navbarLinksReducer,
  university: universityReducer,
  courses: coursesReducer,
  socket: socketReducer,
  form: form,
});

export default rootReducer;

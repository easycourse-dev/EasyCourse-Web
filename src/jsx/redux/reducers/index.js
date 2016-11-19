import { combineReducers } from 'redux';

// Reducers
import { routerReducer } from 'react-router-redux';
import userReducer from './user';
import navbarLinksReducer from './navbarLinks';
import universityReducer from './universities';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  navbarLinks: navbarLinksReducer,
  university: universityReducer,
  form: form,
});

export default rootReducer;

import { combineReducers } from 'redux';

// Reducers
import { routerReducer } from 'react-router-redux';
import userReducer from './user';
import navbarLinksReducer from './navbarLinks';

const rootReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  navbarLinks: navbarLinksReducer
});

export default rootReducer;

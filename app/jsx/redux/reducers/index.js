import { combineReducers } from 'redux';
import userReducer from './user';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer
  user: userReducer
});

export default rootReducer;

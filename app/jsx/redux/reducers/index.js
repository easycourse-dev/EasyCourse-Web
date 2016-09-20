import { combineReducers } from 'redux';
import userReducer from './user';

const rootReducer = combineReducers({
  currentUser: userReducer
});

export default rootReducer;

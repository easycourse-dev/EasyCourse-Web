import { combineReducers } from 'redux';
import user from './user';

const rootReducer = combineReducers({
  currentUser: currentUser
});

export default rootReducer;

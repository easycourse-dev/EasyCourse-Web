import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'
import logger from 'redux-logger';

// Root Reducer
import rootReducer from './reducers/index';

// Create Middlware
const middleware = applyMiddleware(promise(), thunk, logger());

// Create Store
const store = createStore(rootReducer, middleware);

export default store;

import { applyMiddleware, createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Root Reducer
import rootReducer from './reducers/index';

// Create Middlware
const middleware = applyMiddleware(thunk, logger());

const store = createStore(rootReducer, middleware);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
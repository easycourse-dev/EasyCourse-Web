import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'

// Root Reducer
import rootReducer from './reducers/index';

// Create Middlware
const middleware = applyMiddleware(promise(), thunk);

const enhancers = compose(
  middleware,
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

// Create Store
const store = createStore(rootReducer, enhancers);

export default store;

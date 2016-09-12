import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware, { Provider } from 'react-redux';
import api from './redux/api.js';
import reducer from './redux/reducers/reducer.js';
import App from './App.jsx';
import './css/index.css'; // Importing all the CSS files

let createStoreWithMiddleware= applyMiddleware(thunkMiddleware, api)(createStore);

let store = createStoreWithMiddleware(reducer);

ReactDOM.render(<App />, document.getElementById('root'));

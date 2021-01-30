import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware , combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import 'tachyons';
import {SearchRobots, RequestRobots} from './reducers.js';
import thunkMiddleware from 'redux-thunk';
const RootRducesrs = combineReducers({SearchRobots, RequestRobots})
 
const logger = createLogger();
const store = createStore( RootRducesrs,applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<Provider store ={store} > 
    			<App/>
    			</Provider>,document.getElementById('root'));
reportWebVitals();

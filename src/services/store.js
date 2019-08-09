import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import { usersReducer } from './reducers/users';

const rootReducer = combineReducers( {
	users: usersReducer
} );

const initialState = {
	users: {}
};

export default applyMiddleware( promise, thunk, createLogger() )( createStore )( rootReducer, initialState );

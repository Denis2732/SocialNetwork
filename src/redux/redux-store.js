import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { messageReducer } from './reducer-message.js';
import { profileReducer } from './reduser-profile.js';
import usersReducer from "./reduser-frends.js";
import authReducer from "./reduser-auth.js";
import thunkMiddleware from 'redux-thunk';



let reducers = combineReducers({
	messagePage: messageReducer,
	profilePage: profileReducer,
	usersPage: usersReducer,
	auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
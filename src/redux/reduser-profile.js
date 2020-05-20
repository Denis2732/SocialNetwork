import { userAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UP_DATE_NEW_POST_TEXT = "UP-DATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";


let initialState = {
	posts: [
		{ message: 'Привет, как дела?' },
		{ message: 'Это мой второй пост!' },
		{ message: 'Это мой первый пост!' }
	],
	newPostText: '',
	profile: null
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				message: state.newPostText,
			};
			return {
				...state,
				posts: [newPost, ...state.posts],
				newPostText: ''
			};
		case UP_DATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			};
		}
		default:
			return state;
	}

}

export const addPostActionCreated = () => ({ type: ADD_POST })
export const upDateNewPostTextActionCreated = (text) => ({ type: UP_DATE_NEW_POST_TEXT, newText: text, value: '' })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId) => (dispatch) => {
	userAPI.getProfile(userId).then(response => {
		dispatch(setUserProfile(response.data));
	})
}
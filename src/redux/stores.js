import {messageReducer} from './reducer-message.js';
import {profileReducer} from './reduser-profile.js';


let store = {
	_state: {
		profilePage: {
			posts:[
				{message: 'Привет, как дела?'}, 
				{message: 'Это мой второй пост!'}, 
				{message: 'Это мой первый пост!'}
			],
			newPostText: '' 
		},
		messagePage: {
			dialogsData: [
				{id: 1, name: "Антон", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?"},
				{id: 2, name: "Мария", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?"},
				{id: 3, name: "Елена", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?"},
				{id: 4, name: "Ульяна", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?"},
				{id: 5, name: "Александр", src: "http://avki.ru/avatar-wolf/avki-ru-0002-ava-wolf.jpg"},
				{id: 6, name: "Надежда", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?"},
				{id: 7, name: "Андрей", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?"},
				{id: 8, name: "Вячеслав", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?"},
				{id: 9, name: "Екатерина", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?"},
				{id: 10, name: "Ольга", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?"},
				{id: 11, name: "Сергей", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?"}
			],
			myMessagesData: [
				{message: "Привет!", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?"},
				{message: "Все хорошо. У тебя?", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?"},
				{message: "Круто", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?"},
			],
			yourMessagesData: [
				{message: "Привет! Как дела?", src: "http://avki.ru/avatar-wolf/avki-ru-0002-ava-wolf.jpg"},
				{message: "Тоже хорошо, вчера прилетел из Англии.", src: "http://avki.ru/avatar-wolf/avki-ru-0002-ava-wolf.jpg"}
			],
			newMessageBody: ''
			
		}
		
	},
	_callSubscriber() {
		console.log('State changed');
	},


	subscribe(observer) {
		this._callSubscriber = observer; 
	},
	getState() {
		return this._state;
	},


	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagePage = messageReducer(this._state.messagePage, action);


		this._callSubscriber(this._state);

	}
}


 


export default store;
window.store = store;
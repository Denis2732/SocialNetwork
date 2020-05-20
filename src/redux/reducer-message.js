const UP_DATE_NEW_MESSAGE_BODY = "UP_DATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
	dialogsData: [
		{ id: 1, name: "Антон", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?" },
		{ id: 2, name: "Мария", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?" },
		{ id: 3, name: "Елена", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?" },
		{ id: 4, name: "Ульяна", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?" },
		{ id: 5, name: "Александр", src: "http://avki.ru/avatar-wolf/avki-ru-0002-ava-wolf.jpg" },
		{ id: 6, name: "Надежда", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?" },
		{ id: 7, name: "Андрей", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?" },
		{ id: 8, name: "Вячеслав", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?" },
		{ id: 9, name: "Екатерина", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?" },
		{ id: 10, name: "Ольга", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?" },
		{ id: 11, name: "Сергей", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?" }
	],
	myMessagesData: [
		{ message: "Привет!", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?" },
		{ message: "Все хорошо. У тебя?", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?" },
		{ message: "Круто", src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?" },
	],
	yourMessagesData: [
		{ message: "Привет! Как дела?", src: "http://avki.ru/avatar-wolf/avki-ru-0002-ava-wolf.jpg" },
		{ message: "Тоже хорошо, вчера прилетел из Англии.", src: "http://avki.ru/avatar-wolf/avki-ru-0002-ava-wolf.jpg" }
	],
	newMessageBody: ''
};


export const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = {
				message: state.newMessageBody,
				src: "https://avt-9.foto.mail.ru/bk/bestgreg/_avatar180?"
			};
			return {
				...state,
				myMessagesData: [...state.myMessagesData, newMessage],
				newMessageBody: ''
			};
		case UP_DATE_NEW_MESSAGE_BODY: {
			return {
				...state,
				newMessageBody: action.body,
			};
		}
		default:
			return state;
	}

}

export const SendMessageCreated = () => {
	return {
		type: SEND_MESSAGE
	}
}
export const updateNewMessageBodyCreated = (body) => {
	return {
		type: UP_DATE_NEW_MESSAGE_BODY, body: body, value: ''
	}
}

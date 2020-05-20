import React from 'react';
import './../Profile/Profile.css';
import './MessagePage.css';




const MyMessage = (props) => {
	return (
		<div className="my-message">
			<img src={props.src} />
			<span className="message">{props.message}</span>
		</div>
	);
}

const YourMessage = (props) => {
	return (
		<div className="your-message">
			<img src={props.src} />
			<span className="message">{props.message}</span>
		</div>
	);
}

const Messages = (props) => {

	let state = props.messagePage;

	let myMessagesElements = props.myMessagesData.map(messages => <MyMessage message={messages.message} key={messages.id} src={messages.src} />)
	let yourMessagesElements = props.yourMessagesData.map(messages => <YourMessage message={messages.message} key={messages.id} src={messages.src} />)


	let textMessage = () => {
		props.SendMessage();
	}

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	}



	return (
		<div>
			<div className="messages">

				{yourMessagesElements}
				{myMessagesElements}

			</div>
			<div className="input-message">
				<input value={props.newMessageBody} onChange={onNewMessageChange} type="text" placeholder='Введите сообщение' />
				<button type="submit" onClick={textMessage} className="btn-message"><img src="https://image.flaticon.com/icons/svg/929/929900.svg" alt="" /></button>
			</div>
		</div>
	);
}


export default Messages;
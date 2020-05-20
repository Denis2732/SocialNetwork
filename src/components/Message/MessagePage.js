import React from 'react';
import './../Profile/Profile.css';
import './MessagePage.css';
import Dialogs from './Dialogs.js';
import MessagesContainer from './MessagesContainer.js';


const MessagePage = (props) => {
	return (
		<div className='content'>
			<h1>Сообщения</h1>
			<div className="dialogs-messages">
				<Dialogs dialogsData={props.state.messagePage.dialogsData} />
				<MessagesContainer />
			</div>
		</div>
	);
}


export default MessagePage;
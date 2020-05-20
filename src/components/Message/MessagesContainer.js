import React from 'react';
import './../Profile/Profile.css';
import './MessagePage.css';
import Messages from './Messages.js';
import { updateNewMessageBodyCreated, SendMessageCreated } from './../../redux/reducer-message';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state) => {
	return {
		newMessageBody: state.messagePage.newMessageBody,
		myMessagesData: state.messagePage.myMessagesData,
		yourMessagesData: state.messagePage.yourMessagesData,
		isAuth: state.auth.isAuth
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreated(body));
		},
		SendMessage: () => {
			dispatch(SendMessageCreated());
		}
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Messages)

// let authRedirectComponent = withAuthRedirect(Messages)

// // (props) => {
// // 	if (!props.isAuth) return <Redirect to="/login" />
// // 	return <Messages {...props} />
// // }

// const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);

// export default MessagesContainer;
import React from 'react';
import './../Profile/Profile.css';
import './MessagePage.css';
import { NavLink } from 'react-router-dom';


const Dialog = (props) => {
	return (
		<div className="dialog">
			<img src={props.src} />
			<NavLink to={'/message/' + props.id} className="dialogs_name">{props.name}</NavLink>
		</div>
	);
}

const Dialogs = (props) => {
	let dialogsElements = props.dialogsData.map(dialog => <Dialog id={dialog.id} key={dialog.id} name={dialog.name} src={dialog.src} />);
	return (
		<div className="dialogs">

			{dialogsElements}

		</div>
	);
}

export default Dialogs;

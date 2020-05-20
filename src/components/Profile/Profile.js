import React from 'react';
import './Profile.css';
import MyPostContainer from './MyPostContainer.js';
import ProfileInfo from './ProfileInfo';


const Profile = (props) => {

	return (
		<div className='content'>
			<div className="content-profile">
				<ProfileInfo profile={props.profile} />
				<MyPostContainer />
			</div>
		</div>
	)
}

export default Profile;

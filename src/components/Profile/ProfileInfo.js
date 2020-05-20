import React from 'react';
import './Profile.css';
import preloader from './../../img/25.svg';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <img className="preloader" src={preloader} />
    }

    return (
        <div>
            <div className='content-img'>
                <img src="http://www.villatoscana-pi.it/img/site-map-01.jpg" />
            </div>
            <div className='avatar'>
                <img src={props.profile.photos.large} />
                <div className='user-data'>
                    <ul className='user-data-list'>
                        <h2>{props.profile.fullName}</h2>
                        <li>Обо мне: {props.profile.aboutMe}</li>
                        <ProfileStatus status={'Hello my frends'} />
                        <li>instagram: {props.profile.contacts.instagram}</li>
                        <li>Вконтакте: {props.profile.contacts.vk}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
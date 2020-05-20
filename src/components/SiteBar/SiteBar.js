import React from 'react';
import './SiteBar.css';
import { NavLink } from 'react-router-dom';

const SiteBar = () => {
	return (
		<div className='site-bar'>
			<nav className='site-bar_nav'>
				<NavLink to="/profile" activeClassName="activeLink">Профиль</NavLink>
				<NavLink to="/message" activeClassName="activeLink">Сообщения</NavLink>
				<NavLink to="/frends" activeClassName="activeLink">Пользователи</NavLink>
				<NavLink to="/news" activeClassName="activeLink">Новости</NavLink>
				<NavLink to="/music" activeClassName="activeLink">Музыка</NavLink>
				<NavLink to="/settings" activeClassName="activeLink">Настройки</NavLink>
			</nav>
		</div>
	);
}

export default SiteBar;

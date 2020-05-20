import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return (
		<div className='header'>
			<div className="header-content">
				<img src='https://image.flaticon.com/icons/svg/1293/1293878.svg' />
			</div>
			<div className='login-block'>
				{props.isAuth ? props.login
					: <NavLink to={'/login'}>Login</NavLink>
				}
			</div>
		</div>
	);
}

export default Header;

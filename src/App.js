import React from 'react';
import './App.css';
import SiteBar from './components/SiteBar/SiteBar.js';
import Footer from './components/Footer/Footer.js';
import MessagePage from './components/Message/MessagePage.js';
import News from './components/News/News.js';
import Music from './components/Music/Music.js';
import Settings from './components/Settings/Settings.js';
import { BrowserRouter, Route } from 'react-router-dom';
import FrendsContainer from './components/Frends/FrendsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';



const App = (props) => {
	return (
		<BrowserRouter>
			<div>
				<div className='app-wrapper'>
					<HeaderContainer />
					<SiteBar />
					<Route path='/login' render={() => <Login />} />
					<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
					<Route path='/message' render={() => <MessagePage state={props.state} />} />
					<Route path='/frends' render={() => <FrendsContainer />} />
					<Route path='/settings' render={() => <Settings />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App;

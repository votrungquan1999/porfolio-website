import React, { Component } from 'react';

import NavBar from './components/NavBar/NavBar';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Experiences from './sections/Experiences/Experiences';

import './App.css';

class App extends Component {
	render () {
		return (
			<div className={'body'}>
				<NavBar />
				<Home />
				<About />
				<Experiences />
				{/* <div className={'content'} /> */}
			</div>
		);
	}
}

export default App;

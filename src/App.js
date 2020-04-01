import React, { Component } from 'react';

import NavBar from './components/NavBar/NavBar';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Experiences from './sections/Experiences/Experiences';
import Projects from './sections/Projects/Projects';

import './App.css';
import Footer from './components/Footer/Footer';

class App extends Component {
	componentDidMount() {
		document.title = "Quan's Portfolio";
	}

	render() {
		return (
			<div className={'body'}>
				<NavBar />
				<Home />
				<About />
				<Experiences />
				<Projects />
				<Footer />
			</div>
		);
	}
}

export default App;

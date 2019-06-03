import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Experience from './components/Experience/Experience';
import Experiences from './sections/Experiences/Experiences';
import Project from './components/Projects/Project'

import './App.css';


class App extends Component {
	render() {
		return (
			<div className={'body'}>
				<div className={'content'}>
					<NavBar/>
					<Home/>
					<About/>
					<Experiences/>
				</div>
			</div>
		);
	}
}

export default App;

import React from 'react';

import './Home.css';
import home_picture from '../../main_assets/images/home_background/home_background2.svg';
import ContactIcons from '../../components/ContactIcons/ContactIcons';

const Home = () => {
	return (
		<div className={'home'}>
			<div className={'home-content'}>
				<h2>Hi, I am</h2>
				<h1>Quan Vo</h1>
				<h2>A Web and Mobile developer</h2>
				<ContactIcons/>
			</div>
			<img src={home_picture} alt={'home_picture'} className={'contact'}/>
		</div>
	)
};

export default Home
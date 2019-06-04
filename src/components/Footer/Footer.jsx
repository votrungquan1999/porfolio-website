import React from 'react';
import './Footer.css';
import ContactIcons from '../ContactIcons/ContactIcons';

const Footer = () => {
	return (
		<div className='footer-page'>
			<div className='footer'>
				<div className='copyright'>
					<h1>Quan Vo</h1>
					<h2>© 2019 Designed All Rights Reserved</h2>
				</div>
				<div className='footer-contact'>
					<ContactIcons />
				</div>
			</div>
		</div>
	);
};

export default Footer;

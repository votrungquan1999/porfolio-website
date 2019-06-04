import React from 'react';
import './Footer.css';
import ContactIcons from '../ContactIcons/ContactIcons';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='copyright' />
			{ContactIcons}
		</div>
	);
};

export default Footer;

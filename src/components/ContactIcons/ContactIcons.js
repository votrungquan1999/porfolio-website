import React from 'react';

import './ContactIcons.css';

import github_icon from '../../main_assets/images/github_icon.svg';
import gmail_icon from '../../main_assets/images/gmail_icon.png';
import linkedin_icon from '../../main_assets/images/linkedin.svg';

const ContactIcons = () => {
	return (
		<div className={'contact-icons'}>
			<a href={'https://github.com/votrungquan1999'} target={'_blank'}>
				<img src={github_icon} alt={'github'} />
			</a>
			<a href={'mailto:votrungquan99@gmail.com'}>
				<img src={gmail_icon} alt={'gmail'} />
			</a>
			<a href={'https://www.linkedin.com/in/quanvotr/'} target={'_blank'}>
				<img src={linkedin_icon} alt={'github'} />
			</a>
		</div>
	);
};

export default ContactIcons;

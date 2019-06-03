import React from 'react';

import './About.css';

import profile_image from '../../main_assets/images/profile.png';
import AboutDescriptions from '../../components/AboutDescriptions/AboutDescriptions';
import resume from '../../main_assets/documents/resume-quan-vo-official.docx';

const About = () => {
	return (
		<div className={'about-page'} id='about'>
			<div className='about'>
				<h1>
					01. <span className={'blue-color'}>About me</span>
				</h1>
				<div className={'about-content'}>
					<img src={profile_image} alt='porfolio' />
					<AboutDescriptions />
				</div>
				<div className='github-resume'>
					<a
						href={'https://github.com/votrungquan1999'}
						target={'_blank'}
						type='button'
						className='github-proj'
					>
						PROJECTS ON GITHUB
					</a>
					<a href={resume} type='button' className='resume' download>
						RESUME
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;

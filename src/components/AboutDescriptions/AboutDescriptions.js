import React from 'react';

import './AboutDescriptions.css';

const skills = [
	'Python',
	'Django',
	'React.js',
	'Node.js',
	'Sqlite',
	'Java',
	'C/C++',
	'HTML',
	'CSS',
	'JavaScript',
	'Flutter',
	'Dart',
	'R',
	'Perl',

];

const skill_list = skills.map((skill) =>
	<li>{skill}</li>
);

const AboutDescriptions = () => {
	return (
		<div className={'about-descriptions'}>
			<p>
				Hi there!, I'm Quan, a web and android developer who enjoys building high quality and
				meaningful applications. Currently, I am a junior at
				<a href={'https://www.plattsburgh.edu/'} target={'_blank'}>
					<span className={'blue-color'}> SUNY Plattsburgh </span>
				</a>
				working towards improvement of the learning experience and life quality of students on campus
				through convenient and sophisticated software applications. I love to work with different and
				latest technologies, be involved in the whole development process and collaborate with
				extremely talented people to make products that would make an immediate impact. My projects
				always come from a problem I want to solve, and it is by solving that problem that I grow
				and develop my coding abilities. Since January 2019 I serve as a full stack developer for
				<a href={'https://www.coding-hub.com/'} target={'_blank'}>
					<span className={'blue-color'}> Coding Hub</span>
				</a>
				, an organization that develops web and mobile applications to solve real problems at
				<a href={'https://www.plattsburgh.edu/'} target={'_blank'}>
					<span className={'blue-color'}> SUNY Plattsburgh </span>
				</a>
				. This summer I will be interning at
				<a href={'https://digi-texx.vn/'} target={'_blank'}>
					<span className={'blue-color'}> DIGITEXX</span>
				</a>
				!
			</p>
			
			<h2>Technologies I am familiar with:</h2>
			<ul className="my-skills">
				{skill_list}
			</ul>
		</div>
	)
};

export default AboutDescriptions
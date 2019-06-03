import React from 'react';

import './Experiences.css';

import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';

const experiences = [
	{
		title    : 'Software Engineer Intern',
		employer : 'DigiTexx',
		time     : 'May 2019 - September 2019',
		place    : 'Ho Chi Minh City, Vietnam',
		details  : [
			'Apply Redux, React, NodeJs RestAPI to develop a platform to check salary for employees.'
		]
	},
	{
		title    : 'Arduino & Raspberry Pie Programming',
		employer : 'Physics Department SUNY Plattsburgh',
		time     : 'Spring 2018 – Present',
		place    : 'Plattsburgh, NY',
		details  : [
			'Lead a team of 4 people to make an autonomous robot and a maze escape robot.',
			'Apply machine learning to help the maze robot solve the problem 20% faster after the first try.'
		]
	},
	{
		title    : 'Django Full Stack Developer',
		employer : 'CS Deapartment SUNY Plattsburgh',
		time     : 'August 2018 – January 2019',
		place    : 'Plattsburgh, NY',
		details  : [
			'Lead a team of 3 people on developing a platform to help the student get a shared ride for a cheaper price.',
			'Apply Google and Uber APIs into the web application to calculate the estimated cost between two points.',
			'Design Database with multiples models linked with each others and integrated Django server with MySQL Database.'
		]
	},
	{
		title    : 'Teaching Assistant',
		employer : 'CS Department SUNY Plattsburgh',
		time     : 'Fall 2018 – Present',
		place    : 'Plattsburgh, NY',
		details  : [
			'Assist 50+ students in their understanding the core programming concepts using Python.',
			'Hold office hours twice a week to help computer science students one on one in Python, C/C++, Java.'
		]
	},
	{
		title    : 'Programming C/C++',
		employer : 'High School For The Gifted',
		time     : 'Fall 2014 - Spring 2017',
		place    : 'Dong Nai, Viet Nam',
		details  : [
			'Develop programming skills on C and C++ and apply them on solving 100+ logical problems.'
		]
	}
];

const experiences_list = experiences.map((experience) => (
	<ExperienceCard
		title={experience.title}
		employer={experience.employer}
		time={experience.time}
		place={experience.place}
		details={experience.details}
	/>
));

const Experiences = () => {
	return (
		<div className={'experiences'}>
			<h1>
				02. <span className={'blue-color'}>My experiences</span>
			</h1>
			{experiences_list}
		</div>
	);
};

export default Experiences;

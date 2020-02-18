import React from 'react';

import './Experiences.css';

import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';

const experiences = [
	{
		title: 'Software Engineering Intern',
		employer: 'DigiTexx',
		time: 'May 2019 - September 2019',
		place: 'Ho Chi Minh City, Vietnam',
		details: [
			'Apply Redux, React, NodeJs RestAPI to develop a platform to check salary for employees.',
			'Designed and developed a centralized application to help manage other software of the business using JavaScript',
			'Applied Material UI with ReactJS and NodeJS to create user-friendly tools for the employees of the company',
			'Colaborated with a team of 2 engineers to develop and deploy a training web application for new employees'
		]
	},
	{
		title: 'ROBOTICS AUTOMATIONS DEVELOPER',
		employer: 'Physics Department SUNY Plattsburgh',
		time: 'Spring 2018 – Present',
		place: 'Plattsburgh, NY',
		details: [
			'Led a team of 4 people to develop an autonomous robot and a maze escape robot for the National Robotics competition',
			'Used Python to develop machine learning model to improve problem-solving process of the maze robot by 20%'
		]
	},
	{
		title: 'Full Stack Developer',
		employer: 'Coding Hub',
		time: 'August 2018 – Present',
		place: 'Plattsburgh, NY',
		details: [
			'Led a team of 3 people to develop a Django website that allows students to share a ride for a cheaper price',
			'Integrated Google and Uber APIs into the web application to calculate the estimated cost between two locations',
			'Built a NodeJS Express server with MongoDB database and returned JSON for the frontend to fetch',
			'Focus on frontend improvements using React, HTML, and CSS'
		]
	},
	{
		title: 'Teaching Assistant',
		employer: 'CS Department SUNY Plattsburgh',
		time: 'Fall 2018 – Present',
		place: 'Plattsburgh, NY',
		details: [
			'Assisted 50+ students in their understanding the core programming concepts using Python.',
			'Hold office hours twice a week to help computer science students one on one in Python, C/C++, Java.'
		]
	},
	{
		title: 'Programming C/C++',
		employer: 'High School For The Gifted',
		time: 'Fall 2014 - Spring 2017',
		place: 'Dong Nai, Viet Nam',
		details: [
			'Developed programming skills in C and C++ and apply them to solve 100+ logical problems.',
			'Participated in competitive programming contests and placed top 3 in 7 out of 10',
			'Developed a strong intuition and deep understanding of advanced algorithms such as Dijsktra, Lowest Common Ancestor'
		]
	}
];

const experiences_list = experiences.map(experience => (
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

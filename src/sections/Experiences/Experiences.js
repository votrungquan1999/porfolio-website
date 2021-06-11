import React from 'react';

import './Experiences.css';

import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';

const experiences = [
	{
		title: 'Full Stack Software Engineer',
		employer: 'NInja Van',
		time: 'Sep 2020 - Present',
		place: 'Ho Chi Minh City, Vietnam',
		details: [
			'Used Gin-gonic and React JS to create an optimized tool for user to apply the cross-border business process',
			'Designed, architected and developed a module to help the users to speed up their current process by 90%',
			'One of the pioneers that applied Next Js the micro services of the company',
		],
	},
	{
		title: 'Full Stack Software Engineer',
		employer: 'Freelance',
		time: 'March 2021 - Present',
		place: 'Remote, USA',
		details: [
			'Hosted Backend (Golang) on google cloud run and Frontend (NextJs) on Vercel on my own',
			'Analyzed the requirements and provided the best possible solution to satisfied the need of the stakeholders',
		],
	},
	{
		title: 'Full Stack Developer',
		employer: 'Coding Hub',
		time: 'January 2019 – May 2020',
		place: 'Plattsburgh, NY, USA',
		details: [
			'Developed and deployed a mobile app to the app store and play store called Shuttler that tracks the shuttle in real-time',
			'Led a squad of 3 to 7 engineers to develop apps that help the students of the school to have a better life',
			'Integrated with 3rd Party APIs to support the flow of the apps (Google APIs, Uber APIs, …)',
			'Used fluently tech stacks that for both Frontend and Backend: NodeJS/Express, ReactJS, MongoDB',
		],
	},
	{
		title: 'Software Engineering Intern',
		employer: 'DigiTexx',
		time: 'May 2019 - September 2019',
		place: 'Ho Chi Minh City, Vietnam',
		details: [
			'Apply Redux, React, NodeJs RestAPI to develop a platform to check salary for employees.',
			'Designed and developed a centralized application to help manage other software of the business using JavaScript',
			'Applied Material UI with ReactJS and NodeJS to create user-friendly tools for the employees of the company',
			'Colaborated with a team of 2 engineers to develop and deploy a training web application for new employees',
		],
	},
	{
		title: 'ROBOTICS AUTOMATIONS DEVELOPER',
		employer: 'Physics Department SUNY Plattsburgh',
		time: 'Spring 2018 – May 2020',
		place: 'Plattsburgh, NY, USA',
		details: [
			'Led a team of 4 people to develop an autonomous robot and a maze escape robot for the National Robotics competition',
			'Used Python to develop machine learning model to improve problem-solving process of the maze robot by 20%',
		],
	},

	{
		title: 'Teaching Assistant',
		employer: 'CS Department SUNY Plattsburgh',
		time: 'Fall 2018 – May 2020',
		place: 'Plattsburgh, NY, USA',
		details: [
			'Assisted 50+ students in their understanding the core programming concepts using Python.',
			'Hold office hours twice a week to help computer science students one on one in Python, C/C++, Java.',
		],
	},
	{
		title: 'Programming C/C++',
		employer: 'High School For The Gifted',
		time: 'Fall 2014 - Spring 2017',
		place: 'Dong Nai, Viet Nam',
		details: [
			'Developed programming skills in C and C++ and apply them to solve 100+ logical problems.',
			'Participated in competitive programming contests and placed top 3 in 7 out of 10',
			'Developed a strong intuition and deep understanding of advanced algorithms such as Dijsktra, Lowest Common Ancestor',
		],
	},
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

import React from "react"

import "./Experience.css"

import InnerExperience from "./inner_experience/inner_experience"

const experiences = [
	{
		title: "Arduino & Raspberry Pie Programming",
		employer: "Physics Department SUNY Plattsburgh",
		time: "Spring 2018 – Present",
		place: "Plattsburgh, NY",
		details: [
			"Lead a team of 4 people to make an autonomous robot and a maze escape robot.",
			"Apply machine learning to help the maze robot solve the problem 20% faster after the first try.",
		],
	},
	{
		title: "Django Full Stack Developer",
		employer: "CS Deapartment SUNY Plattsburgh",
		time: "August 2018 – January 2019",
		place: "Plattsburgh, NY",
		details: [
			"Lead a team of 3 people on developing a website to help the student get a shared ride for a cheaper price.",
			"Apply Google and Uber APIs into the web application to calculate the estimated cost between two points.",
			"Integrated Django server with MySQL Database and give a demo presentation to 30+ students and faculties."
		]
	},
	{
		title: "Programming C/C++",
		employer: "High School For The Gifted",
		time: "Fall 2014 - Spring 2017",
		place: "Dong Nai, Viet Nam",
		details: [
			"Develop programming skills on C and C++ and apply them on solving more than 100 logical problems."
		]
	},
	{
		title: "Teaching Assistant",
		employer: "CS Department SUNY Plattsburgh",
		time: "Fall 2018 – Present",
		place: "Dong Nai, Viet Nam",
		details: [
			"Assist 50+ students in their understanding the core programming concepts using Python.",
			"Hold office hours twice a week to help computer science students one on one in Python, C/C++, Java.",
		]
	}
];

const experience_list = experiences.map((experience) => (
	<InnerExperience
		title={experience.title}
		employer={experience.employer}
		time={experience.time}
		place={experience.place}
		details={experience.details}
	/>
))

const Experience = () => {
	return (
		<div className="experience">
			<h1 className="title">Experiences</h1>
			<div className="experiences">
				{experience_list}
			</div>
		</div>
	)
};

export default Experience
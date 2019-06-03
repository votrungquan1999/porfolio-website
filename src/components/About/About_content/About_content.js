import React from "react"

import portrait_img from "../../../main_assets/images/portrait.jpg"
import resume from "../../../main_assets/documents/resume-quan-vo-official.docx"

import "./About_content.css"

const github_project_link = 'https://github.com/votrungquan1999?tab=projects';

const myIntroduction= "I am a mobile and web developer.";

const skills = [
	'python',
	'django',
	'react.js',
	'node.js',
	'sqlite',
	'java',
	'C/C++',
	'HTML',
	'CSS',
	'javaScript',
	'Flutter',
	'Dart',
	'R',
	'Perl',
	
];

const skill_list = skills.map((skill) =>
	<li>{skill}</li>
);

const AboutContent = () => {
	return (
		<div className="about-content">
			<img src={portrait_img} alt="portrait" className="portrait"/>
			<div className="right-column">
				<p className="introduction">{myIntroduction}</p>
				<p className="skill-statement">I am familiar with:</p>
				<ul className="my-skills">
					{skill_list}
				</ul>
				<div className="github-resume">
					<a href={github_project_link} type="button" className="github-proj">
						My projects on github
					</a>
					<a href={resume} type="button" className="resume" download>
						RESUME
					</a>
				</div>
			</div>
		</div>
	)
}

export default AboutContent
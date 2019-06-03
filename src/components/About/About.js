import React from "react"

import AboutContent from "./About_content/About_content"

import "./About.css"

const About = () => {
	return (
		<div className="about">
			<h1 className="title">About me</h1>
			<AboutContent/>
		</div>
	)
};

export default About
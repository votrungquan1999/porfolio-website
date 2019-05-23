import React from "react"

import "./ProjectCard.css"

import {} from "../../../main_assets/images/tryp-home.png"

const ProjectCard = (props) => {
	const platform_list = props.platforms.map((platform) => (
		<li>{platform}</li>
	));
	
	return (
		<div>
			<img src={props.background} alt="background"/>
			<div>
				<h1>{props.title}</h1>
				<ul>
					{platform_list}
				</ul>
			</div>
		</div>
	)
};

export default ProjectCard
import React from "react"

import "./Projects.css"
import ProjectCard from "./project_card/ProjectCard"

import tryp_background from "../../main_assets/images/tryp-home.png"

const projects = [
	{
		tilte: "Turn-based Battling Game",
		platforms: [
			"Python",
			"Pygame"
		],
		background: tryp_background,
	}
];

const project_list = projects.map((project) => (
	<ProjectCard
		title={project.tilte}
		platforms={project.platforms}
		background={project.background}
	/>
));

const Project = () => {
	return (
		<div className="project">
			<h1 className="title">Some of My Projects</h1>
			<div>
				<ul>
					{project_list}
				</ul>
			</div>
		</div>
	)
};

export default Project
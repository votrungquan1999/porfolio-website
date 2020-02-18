import React from 'react';

import deploy_icon from '../../main_assets/images/deploy_arrow.svg';
import github_icon from '../../main_assets/images/github_icon.png';
// import project_image from '../../main_assets/images/project_picture.png';
import portfolio_image from '../../main_assets/images/portfolio-image.png';
import tutoringhub_image from '../../main_assets/images/tutoringhub.png';
import shuttler_image from '../../main_assets/images/shuttler.png';
import pygame_picture from '../../main_assets/images/pygame_picture.png';
import './Projects.css';

const initial_projects = [
	{
		title: 'tutoring hub',
		descriptions:
			'Tutoring Hub is a website that allows students to rate the tutors at the Learning Center. Students can write and read reviews about their tutors so they can choose the best tutor for them based on their reviews',
		github_url: 'https://github.com/coding-hub-org/tutoring-hub',
		picture_url: tutoringhub_image,
		deploy_url: '',
		techs: ['NodeJs', 'ReactJs', 'MongoDB', 'JavaScript']
	},
	{
		title: 'porfolio website',
		descriptions:
			'My personal portfolio responsive website, built with react to showcase my experiences, projects and let viewers get to know a little bit more about me',
		github_url: 'https://github.com/votrungquan1999/portfolio-website',
		picture_url: portfolio_image,
		deploy_url: '',
		techs: ['ReactJs', 'CSS', 'HTML', 'JavaScript']
	},
	{
		title: 'turn-based battling game',
		descriptions:
			'A multiplayer battling game built with Python and Pygame. This project got the first place at the Plattsburgh Hackathon in 2018',
		github_url: 'https://github.com/nazislam/Hackathon-TGOF',
		picture_url: pygame_picture,
		deploy_url: '',
		techs: ['Python', 'Pygame', 'Algorithms']
	},
	{
		title: 'Shuttler',
		descriptions:
			'An application that lets students track the school shuttle in realtime using Flutter and Firebase',
		github_url: 'https://github.com/coding-hub-org/shuttler-flutter',
		picture_url: shuttler_image,
		deploy_url: '',
		techs: ['Dart', 'Flutter', 'Firebase']
	}
];

const icons = {
	github: github_icon,
	deploy: deploy_icon
};

const all_techs = [
	'Show All',
	'NodeJs',
	'ReactJs',
	'MongoDB',
	'JavaScript',
	'CSS',
	'HTML',
	'Python',
	'Pygame',
	'Algorithms',
	'Dart',
	'Flutter',
	'Firebase'
];

const icon_generate = (type, url) => {
	const new_icon =
		url === '' ? (
			<img src={icons[type]} alt={icons[type]} />
		) : (
			<a href={url} target='_blank' rel='noopener noreferrer'>
				<img src={icons[type]} alt={icons[type]} />
			</a>
		);

	return new_icon;
};

const project_card_tech_list = techs => {
	const new_tech_list = techs.map(tech => {
		return <li>{tech}</li>;
	});
	return new_tech_list;
};

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: initial_projects
		};
	}

	project_cards = projects => {
		const new_project_cards = projects.map(project => {
			return (
				<div className='project-card'>
					<div className='project-content'>
						<h1 className='title'>
							<span className='blue-color'>{project.title}</span>
						</h1>
						<h2 className='descriptions'>{project.descriptions}</h2>
						<ul>{project_card_tech_list(project.techs)}</ul>
						<div>
							{icon_generate('github', project.github_url)}

							{icon_generate('deploy', project.deploy_url)}
						</div>
					</div>
					<img src={project.picture_url} alt='porfolio' />
				</div>
			);
		});
		return new_project_cards;
	};

	filter_projects = tech => {
		const new_state =
			tech === 'Show All'
				? initial_projects
				: initial_projects.filter(project => {
						return project.techs.includes(tech);
				  });

		this.setState({
			projects: new_state
		});
	};

	render() {
		const filter_tech_list = all_techs.map(tech => {
			return <li onClick={() => this.filter_projects(tech)}>{tech}</li>;
		});

		return (
			<div className='project-page'>
				<div className='projects'>
					<h1>
						03.{' '}
						<span className={'blue-color'}>My major projects</span>
					</h1>
					<div className='filter-projects'>
						<ul>{filter_tech_list}</ul>
					</div>
					{this.project_cards(this.state.projects)}
				</div>
			</div>
		);
	}
}

export default Projects;

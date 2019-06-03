import React from 'react';

import './ExperienceCard.css';

const ExperienceCard = (props) => {
	const detail_list = props.details.map((detail) => (
		<li>{detail}</li>
	));
	
	return(
		<div className="experience-card">
			<div className="title-employer">
				<h1 className="experience-title"><span className={'blue-color'}>{props.title}</span> </h1>
				<h1>@</h1>
				<h1 className="employer">{props.employer}</h1>
			</div>
			<div className="time-place">
				<p className="time">{props.time}</p>
				<p className="place">{props.place}</p>
			</div>
			<ul className="detail-list">
				{detail_list}
			</ul>
		</div>
	)
};

export default ExperienceCard
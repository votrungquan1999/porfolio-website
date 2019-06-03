import React from 'react';
import scrollToElement from 'scroll-to-element';

import './NavBar.css';

class NavBar extends React.Component {
	handle_click = (id) => {
		scrollToElement(id, {
			ease : 'linear'
		});
	};

	render () {
		return (
			<nav className='NavBar'>
				<ul>
					<li onClick={() => this.handle_click('.about')}>About</li>
					<li onClick={() => this.handle_click('.experiences')}>
						Experiences
					</li>
					<li onClick={() => this.handle_click('.projects')}>
						Projects
					</li>
					<li onClick={() => this.handle_click('.contact')}>
						Contact
					</li>
				</ul>
			</nav>
		);
	}
}

export default NavBar;

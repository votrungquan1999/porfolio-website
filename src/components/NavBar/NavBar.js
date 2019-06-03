import React from 'react'

import './NavBar.css'

const NavBar = (props) => {
	return (
		<nav className="NavBar">
			<ul>
				<li><a href={"/#about/"}>About</a></li>
				<li><a href={"/#experiences/"}>Experiences</a></li>
				<li><a href={"/#projects/"}>Projects</a></li>
				<li><a href={'/#contact/'}>Contact</a></li>
			</ul>
		</nav>
	)
}

export default NavBar
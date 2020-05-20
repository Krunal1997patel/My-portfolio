import React from 'react';
import '../styling/navbar.scss';

const Nav = (props) => {
	return (
		<div className='navbar'>
			<div className='center'>
				<div className='logo'>
					<a href='#'>Kp</a>
				</div>

				<div className='allLinks'>
					<a href='#About'>About</a>

					<a href='#Skill'>Skill</a>

					<a href='#Project'>Project</a>

					<a href='#Contact'>Contact</a>
				</div>
			</div>
		</div>
	);
};

export default Nav;

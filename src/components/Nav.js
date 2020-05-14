import React from 'react';
// import useDarkMode from '../hooks/useDarkMode';
import '../styling/navbar.scss';

const Nav = (props) => {
	// const [DarkMode, setUseDarkMode] = useDarkMode(false);

	// const toggleDarkMode = (e) => {
	// 	e.preventDefault();
	// 	setUseDarkMode(!DarkMode);
	// };

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

// {
/* {DarkMode === true ? (
	<button
		onClick={toggleDarkMode}
		className={DarkMode ? 'dark-button dark-
		<img src='https://img.icons8.com/nolan/64/smiling-sun.png' />
	</button>
) : (
	<button
		onClick={toggleDarkMode}
		className={DarkMode ? 'dark-button dark-mode' : 'dark-button'}
	>
		<img src='https://img.icons8.com/nolan/64/full-moon.png' />
	</button>
)} */
// }

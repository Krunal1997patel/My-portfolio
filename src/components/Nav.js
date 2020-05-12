import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import '../styling/navbar.scss';

const Nav = (props) => {
	const [DarkMode, setUseDarkMode] = useDarkMode(false);

	const toggleDarkMode = (e) => {
		e.preventDefault();
		setUseDarkMode(!DarkMode);
	};

	return (
		<div className='navbar'>
			<button className='link' href='#'>
				<a href='#'>About</a>
			</button>
			<button className='link' href='#'>
				Skill
			</button>
			<button className='link' href='#'>
				Project
			</button>
			<button className='link' href='#'>
				Contact
			</button>

			{DarkMode === true ? (
				<button
					onClick={toggleDarkMode}
					className={DarkMode ? 'dark-button dark-mode' : 'dark-button'}
				>
					<img src='https://img.icons8.com/nolan/64/smiling-sun.png' />
				</button>
			) : (
				<button
					onClick={toggleDarkMode}
					className={DarkMode ? 'dark-button dark-mode' : 'dark-button'}
				>
					<img src='https://img.icons8.com/nolan/64/full-moon.png' />
				</button>
			)}
		</div>
	);
};

export default Nav;

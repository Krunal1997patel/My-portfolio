import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Nav = (props) => {
	const [DarkMode, setUseDarkMode] = useDarkMode(false);

	const toggleDarkMode = (e) => {
		e.preventDefault();
		setUseDarkMode(!DarkMode);
	};

	return (
		<div>
			{DarkMode === true ? (
				<button
					onClick={toggleDarkMode}
					className={DarkMode ? 'dark-button dark-mode' : 'dark-button'}
				>
					Light Mode
				</button>
			) : (
				<button
					onClick={toggleDarkMode}
					className={DarkMode ? 'dark-button dark-mode' : 'dark-button'}
				>
					Dark Mode
				</button>
			)}
		</div>
	);
};

export default Nav;

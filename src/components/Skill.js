import React from 'react';
import '../styling/skill.scss';
import HTML from '../images/html5-brands.svg';
import CSS from '../images/css3-alt-brands.svg';
import JS from '../images/js-brands.svg';
import DATABASS from '../images/database-solid.svg';
import TEST from '../images/flask-solid.svg';
import NODE from '../images/node-brands.svg';
import REACT from '../images/react-brands.svg';
import SASS from '../images/sass-brands.svg';
import BOOTSTRAP from '../images/bootstrap-brands.svg';
import NPM from '../images/npm-brands.svg';
import GIT from '../images/git-alt-brands.svg';

const Skill = (props) => {
	const skillImages = [
		{
			img: HTML,
			name: 'HTML5',
		},
		{
			img: CSS,
			name: 'CSS3',
		},
		{
			img: SASS,
			name: 'SASS',
		},
		{
			img: BOOTSTRAP,
			name: 'Bootstrap',
		},
		{
			img: JS,
			name: 'JavaScript',
		},
		{
			img: REACT,
			name: 'React / redux',
		},
		{
			img: TEST,
			name: 'Jest',
		},
		{
			img: NODE,
			name: 'Node / Express',
		},
		{
			img: DATABASS,
			name: 'SQL',
		},
		{
			img: NPM,
			name: 'npm',
		},
		{
			img: GIT,
			name: 'git',
		},
	];

	return (
		<div id='Skill' className='skill-background'>
			<div className='skill-center'>
				<h2>Skills</h2>
				<hr />
				<div className='skill-img'>
					{skillImages.map((imgs) => (
						<div className='skill-info' key={imgs.name}>
							<img src={imgs.img} className='one-images' alt='images' />
							<h3 className='skill-name'>{imgs.name}</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skill;

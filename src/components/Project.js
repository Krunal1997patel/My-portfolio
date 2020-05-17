import React from 'react';
import '../styling/project.scss';
import celebDeadOrAlive from '../images/celeb.png';
import gigapet from '../images/gigapet.png';
import Rick from '../images/rick.png';
import Nasa from '../images/nasa-photo.png';

const Project = (props) => {
	const allProject = [
		{
			image: celebDeadOrAlive,
			name: 'Celebrities Dead or Alive',
			info:
				'This application is a questionaire that tests whether you know if a celebrity is still alive or not. ',
			demo: 'https://celeb-doa.netlify.app/',
			github: 'https://github.com/Buildweek-Dead-Celebrities',
		},
		{
			image: gigapet,
			name: 'Gigapet API',
			info:
				'This application was designed to help parents create a diet plan for their children to keep them healthy.',
			demo: 'https://build-gigapet.herokuapp.com',
			github: 'https://github.com/Build-Gigapet/Back-End',
		},
		{
			image: Rick,
			name: 'Rick And Morty',
			info:
				'This is a Rick & Morty Fan Page where the fan of the show can search up their favorite character and location.',
			demo: 'https://rick-info.netlify.app',
			github:
				'https://github.com/Krunal1997patel/Sprint-Challenge-Single-Page-Apps/tree/krunal-patel',
		},
	];

	return (
		<div id='Project' className='project-background'>
			<div className='project-center'>
				<h2>Project</h2>
				<hr />
				<div className='all-project'>
					{allProject.map((project) => (
						<div key={project.name} className='project-info'>
							<img
								className='project-img'
								src={project.image}
								alt={project.name}
							/>
							<h3 className='name'>{project.name}</h3>
							<p className='info'>{project.info}</p>
							<div className='links'>
								<a className='demo' href={project.demo} target='blank'>
									Demo
								</a>
								<a target='blank' className='github' href={project.github}>
									Github
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Project;

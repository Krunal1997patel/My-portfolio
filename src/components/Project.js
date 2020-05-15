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
				' This application tests your knowledge to know if the Celebrities are dead or alive. I was in charge of styling the full application and making the signup part of the application, and the timer, and how to redirect the user after the timer runs out. ',
			demo: 'https://celeb-doa.netlify.app/',
			github: 'https://github.com/Buildweek-Dead-Celebrities',
		},
		{
			image: gigapet,
			name: 'Gigapet API',
			info:
				' Helping parents establish better diets for their children. I was in charge of fully developing the backend with RESTful API with the use of Node, Express, Knex, SQL, and deploying the Gigapet backend on Heroku.',
			demo: 'https://build-gigapet.herokuapp.com',
			github: 'https://github.com/Build-Gigapet/Back-End',
		},
		{
			image: Nasa,
			name: 'NASA Photo Of Day',
			info:
				' Helping parents establish better diets for their children. I was in charge of fully developing the backend with RESTful API with the use of Node, Express, Knex, SQL, and deploying the Gigapet backend on Heroku.',
			demo: 'https://space-photo.netlify.app',
			github:
				'https://github.com/Krunal1997patel/nasa-photo-of-the-day/tree/part-2',
		},
		{
			image: Rick,
			name: 'Rick And Morty',
			info:
				' Helping parents establish better diets for their children. I was in charge of fully developing the backend with RESTful API with the use of Node, Express, Knex, SQL, and deploying the Gigapet backend on Heroku.',
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

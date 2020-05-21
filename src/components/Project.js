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
			built:
				'React | Redux | Styled Components | Jest | React Router | full CRUD ',
			work:
				'Handled all styling for the application, created the component that allows users to sign in and built out the game timer along with its redirect functionality once the time is up with a global state handling system using React Hooks similar to Redux.',
			demo: 'https://celeb-doa.netlify.app/',
			github: 'https://github.com/Buildweek-Dead-Celebrities',
		},
		{
			image: gigapet,
			name: 'Gigapet API',
			info:
				'This application was designed to help parents create a diet plan for their children to keep them healthy.',
			built:
				'Node.js | Express | Knex | Postgresql | Jest | Cors | Jsonwebtoken | Bcryptjs ',
			work:
				' Designed and developed the architecture for the relational database utilizing with PostgreSQL using KnexJS, used Bcrypt to provide users with secure password storage on sign-up, developed the application on Heroku.',
			demo: 'https://build-gigapet.herokuapp.com',
			github: 'https://github.com/Build-Gigapet/Back-End',
		},
		{
			image: Rick,
			name: 'Rick And Morty',
			info:
				'This is a Rick & Morty Fan Page where the fan of the show can search up their favorite character and location.',
			built:
				'React | Hooks | Styled Components | React Router | Axios | Rick and Morty API',
			work:
				' Developed the application front end using React along with React Hooks for global state management. Implemented responsive design aspects using Styled Components, in order to provide the best user interface and user experience possible.',
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
							<p className='info'>{project.built}</p>
							<p className='info'>&bull; {project.info}</p>
							<p className='info'>&bull; {project.work}</p>
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

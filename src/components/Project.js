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
				'Developed using React, Redux, Styled Components, Jest, React Router, and full CRUD operations.',
			work:
				'I was in charge of styling the full application and making the sign-up, home, and timer part of the application also worked on the functionality of the main part of the application changing the image after user selecting their answer and pick random images in the database.',
			demo: 'https://celeb-doa.netlify.app/',
			github: 'https://github.com/Buildweek-Dead-Celebrities',
		},
		{
			image: gigapet,
			name: 'Gigapet API',
			info:
				'This application was designed to help parents create a diet plan for their children to keep them healthy.',
			built:
				'Developed using Node.js, Express, Knex, postgresql, Jest, Cors, and Jsonwebtoken, ',
			work:
				' my role in this project was fully developing the backend with RESTful API and deploying the Gigapet backend on Heroku.',
			demo: 'https://build-gigapet.herokuapp.com',
			github: 'https://github.com/Build-Gigapet/Back-End',
		},
		{
			image: Rick,
			name: 'Rick And Morty',
			info:
				'This is a Rick & Morty Fan Page where the fan of the show can search up their favorite character and location.',
			built:
				'Developed using React, Hooks, Styled cComponents, React Router, and Axios for rick and morty API',
			work:
				' I fully developed this application with the styling of the page and functionality as a user can filter any character or location with the search bar, and searching any character in the random part of the application. ',
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
							<p className='info'>&bull; {project.info}</p>
							<p className='info'>&bull; {project.built}</p>
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

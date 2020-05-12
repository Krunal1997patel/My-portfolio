import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skill';
import Contact from './components/Contact';

function App() {
	return (
		<div className='App'>
			<Nav />
			<div>
				<Dashboard />
				<About />
				<Skills />
				<Project />
				<Contact />
			</div>
		</div>
	);
}

export default App;

import React from 'react';
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
			<Dashboard />
			<About />
			<Skills />
			<Project />
			<Contact />
		</div>
	);
}

export default App;

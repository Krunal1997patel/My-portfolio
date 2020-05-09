import React from 'react';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skill';
import Contact from './components/Contact';

function App() {
	return (
		<div className='App'>
			<Dashboard />
			<About />
			<Skills />
			<Project />
			<Contact />
		</div>
	);
}

export default App;

import React from 'react';
import './App.css';
import './normlize.css';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<Nav />
			<div className='the-main'>
				<Dashboard />
				<About />
				<Skills />
				<Project />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

export default App;

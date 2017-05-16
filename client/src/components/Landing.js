import React, { Component } from 'react';
import Navbar from './Navbar';
import IntroHeader from './IntroHeader';
import About from './About';
import Screens from './Screens';
import Details from './Details';
import Contact from './Contact';
import Footer from './Footer';
import './Landing.css';
import './App.css';

class Landing extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<IntroHeader />
				<About />
				<Screens />
				<Details />
				<Contact />
				<Footer />
			</div>
		)
	}
}

export default Landing;
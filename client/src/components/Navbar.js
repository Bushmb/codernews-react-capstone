import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Landing.css';

class Navbar extends Component {
	render() {
		return (
			<nav id="mainNav" className="navbar fixed-top navbar-toggleable-md navbar-light">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
			        Menu <i className="fa fa-bars"></i>
			    </button>
			    <div className="container">
			    	<div className="brand-container">
			        	<a className="navbarL-brand" href="#page-top">Coder News</a>
			        </div>
			        <div className="collapse navbar-collapse" id="navbarExample">
			            <ul className="navbar-nav ml-auto">
			                <li className="nav-item">
			                    <a className="nav-link" href="#about">About</a>
			                </li>
			                <li className="nav-item">
			                    <a className="nav-link" href="#details">Details</a>
			                </li>
			                <li className="nav-item">
			                    <a className="nav-link" href="#contact">Contact</a>
			                </li>
			                <li className="nav-item">
			                	<Link className="nav-link" to={'/signin'}>Sign In</Link>
			                </li>
			            </ul>
			        </div>
			    </div>
			</nav>
		)
	}
}

export default Navbar;

import React, { Component } from 'react';
import './Landing.css';

class IntroHeader extends Component {
	render() {
		return (
			<header className="masthead">
			    <div className="intro-body">
			        <div className="container brand-header">
			        <h1 className="brand-heading realemboss">Coder News</h1>
	                    <p className="intro-text">Easy to access news stories about the most used programming languages.</p>
	                    <a href="#about" className="aarow-circle-down"></a>
	                    <a href="#about" className="btn btn-circle page-scroll">
	                        <i className="fa fa-angle-double-down animated"></i>
	                    </a>
			            
			        </div>
			    </div>
			</header>
		)
	}
}

export default IntroHeader;

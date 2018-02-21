import React, { Component } from 'react';

import './Landing.css';

class Contact extends Component {

	render() {
		return(
			<section id="contact" className="container content-section text-center">
			 		<div className="row">
			        <div className="col-lg-8 offset-md-2">
			            <h2>Contact Me</h2>
			            <p>	You can find more about me and my apps by visiting 
			            	the follwing sites: 
			            </p>
			            <ul className="list-inline banner-social-buttons">
			                <li className="list-inline-item">
			                    <a href="https://twitter.com/mb_coder" 
			                    	className="btn btn-social btn-lg">
			                    	<span>
			                    	<i className="fa fa-twitter fa-fw"></i> 
			                    	<span className="network-name">Twitter</span>
			                    	</span>
			                    </a>
			                </li>
			                <li className="list-inline-item">
			                    <a href="https://github.com/Bushmb" 
			                    	className="btn btn-social btn-lg">
			                    	<span>
			                    	<i className="fa fa-github fa-fw"></i> 
			                    	<span className="network-name">Github</span>
			                    	</span>
			                    </a>
			                </li>
			                <li className="list-inline-item">
			                    <a href="https://www.linkedin.com/in/michael-bush-b0b94333" 
			                    	className="btn btn-social btn-lg">
			                    	<span>
			                    	<i className="fa fa-linkedin fa-fw"></i> 
			                    	<span className="network-name">LinkedIn</span>
			                    	</span>
			                    </a>
			                </li>
			            </ul>
			        </div>
			    </div>
			</section>
		);
	}
}

export default Contact;
import React, { Component } from 'react';

class Details extends Component {

	render() {
		return (
			<section id="details" className="content-section text-center">
			    <div className="details-section">
			        <div className="container">
			            <div className="col-lg-4">
			                <h2>Coder News</h2>
			                <p>is built using the MERN stack and incorporates 
			                	Bootstrap 4 to provide a consistent experience no 
			                	matter what device is used to access it.
			               	</p>
			            </div>
			        </div>
			    </div>
			    <div className="logos"></div>
			</section>
		);
	}
}

export default Details;
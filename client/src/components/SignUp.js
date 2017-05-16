import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			token: '',
			secret: '',
			user: '',
			uid: '',
			error: {
				code: '',
				message: '',
			}
		}
	}
	handleKeyDown(e) {
		if(e.keyCode === 13 && !this.state.user) {
			this.signUp(e);
		}
	}

	componentWillMount() {
		document.addEventListener("keydown", this.handleKeyDown.bind(this));
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyDown.bind(this));
	}

	signUp(e) {
		e.preventDefault();
		const { email , password } = this.state;
		firebaseApp.auth().createUserWithEmailAndPassword(email, password)
			.catch(error => {
				console.log('error', error);
				this.setState({error});
			})
	}

	render() {
		return (
			<div className="container">
				<h1 className="realemboss text-center">Coder News</h1>
				<h5 className="text-center">Easily accessible news about the most common programming languages</h5>
			    <div className="row">
			        <div className="form_bg">
			            <form className="signUpForm" onSubmit={(e) => this.signUp(e)}>
			                 <h2 className="text-center">Sign Up</h2>
			                <br/>
			                <div className="form-group">
			                    <input
			                    	className="form-control"
			                    	type="text"
			                    	placeholder="email"
			                    	onChange={event => this.setState({email: event.target.value})}
			                    />
			                </div>
			                <div className="form-group">
			                    <input
			                    	className="form-control"
			                    	type="password"
			                    	placeholder="password"
			                    	onChange={event => this.setState({password: event.target.value})}
			                    />
			                    <p>Password must be at least 6 characters</p>
			                </div>
			                <br/>
			                <div>{this.state.error.message}</div>
			               
			                <div className="align-center">
			                   <button
	   								className="btn btn-success"
	   								type="submit"
	   							>
	   							Sign Up
	   							</button>
			                </div> 
			                <div style={{ marginTop: 10 }}>Already have an account?<Link to={'/signin'}> Sign In</Link></div>
			            </form>
			        </div>
			    </div>
			</div>
			
		)
	}
}

export default SignUp;

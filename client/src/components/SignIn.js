import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';
import * as firebase from 'firebase';
import './App.css';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			token: '',
			secret: '',
			user: '',
			error: {
				code: '',
				message: '',
			}
		}
	}

	handleKeyDown(e) {
		if(e.keyCode === 13 && !this.state.user) {
			this.signIn(e);
		}
	}

	componentWillMount() {
		document.addEventListener("keydown", this.handleKeyDown.bind(this));
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyDown.bind(this));
	}

	signIn(e) {
		e.preventDefault();
		const { email , password } = this.state;
		firebaseApp.auth().signInWithEmailAndPassword(email, password)
			.catch(error => {
				console.log('error', error);
				this.setState({error});
			})
	}
	// added to provide employers with a quick way to get into the app without signing in or registering (as per capstone requirements)
	quickSignIn(e) {
		e.preventDefault();
		firebaseApp.auth().signInWithEmailAndPassword('test@test.com', 'test1234')
			.catch(error => {
				console.log('error', error);
				this.setState({error});
			})
	}

	signInWithTwitter(e) {
		e.preventDefault();
		const provider = new firebase.auth.TwitterAuthProvider();
		provider.setCustomParameters({
			'prompt': 'select_account'
		});

		firebaseApp.auth().signInWithPopup(provider).then(result => {

		  const token = result.credential.accessToken;
		  const secret = result.credential.secret;
		  const user = result.user;
		  this.setState({token, secret, user});
	  
		}).catch(error => {

		  const errorCode = error.code;
		  const errorMessage = error.message;
		  this.setState({errorCode, errorMessage});

		});
	}

	render() {
		return (
			<div className="container">
				<h1 className="realemboss text-center">Coder News</h1>
				<h5 className="text-center">Easily accessible news about the most common programming languages</h5>
			    <div className="row">
			        <div className="form_bg">
			            <form className="signInForm" onSubmit={(e) => this.signIn(e)}>
			                 <h2 className="text-center">Sign In</h2>
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
			                </div>
			                <br/>
			                <div>{this.state.error.message}</div>
			               
			                <div className="align-center">
			                   <button
	   								className="btn btn-success"
	   								type="submit"
	   							>
	   							Sign In
	   							</button>
			                   <button
	   								className="btn btn-quicksignin"
	   								type="button"
	   								onClick={(e) => this.quickSignIn(e)}
	   							>
	   							Demo Sign In
	   							</button>
			                </div>
			                <h4 className="ortext"><span>OR</span></h4>
			                <br/>
			                <div className="align-center">
				                <button
				                	className="btn twitterbtn"
				                	type="button"
				                	onClick={(e) => this.signInWithTwitter(e)}
				                >
				                Sign In with Twitter
				                </button>
			                </div>
			                <div style={{ marginTop: 10 }}>Don't have an account?<Link to={'/signup'}> Sign Up instead</Link></div>
			            </form>
			        </div>
			    </div>
			</div>
				
		)
	}
}

export default SignIn;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';
import * as firebase from 'firebase';

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

	signIn() {
		console.log('this.state', this.state)
		const { email , password } = this.state;
		firebaseApp.auth().signInWithEmailAndPassword(email, password)
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
		  // const email = error.email;
		  // const credential = error.credential;
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
			            <form>
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
	   								type="button"
	   								onClick={() => this.signIn()}
	   							>
	   							Sign In
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

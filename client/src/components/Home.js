import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { firebaseApp } from '../firebase';
// CSS
import '../index.css';

// Components
import App from './App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Landing from './Landing';

// Used to locate uid in localStorage
export const storageKey = 'KEY_FOR_LOCAL_STORAGE';

export const isAuthenticated = () => {

	return !!firebaseApp.auth().currentUser || !!localStorage.getItem(storageKey);

}

const NoMatch = ({ location }) => (

	<div>
		<h3>No match for <code>{location.pathname}</code></h3>
	</div>

)

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uid: null
		}
	}

	componentDidMount() {

		firebaseApp.auth().onAuthStateChanged(user => {
			if(user) {
				window.localStorage.setItem(storageKey, user.uid);
				this.setState({uid: user.uid})

			} else {
				window.localStorage.removeItem(storageKey);
				this.setState({uid: null})
			}
		})
		
	}

	render() {

		return (
		  	<Router>
		  		<div>
		  			<Switch>
		  				
			  			<Route exact path="/" render={() => (
				  		  this.state.uid ? (
				  		    <App />
				  		  ) : (
				  		    <Landing />
				  		  )
				  		)}/>
			  			<Route exact path="/signin" render={() => (
				  		  this.state.uid ? (
				  		  	<App />
				  		  ) : (
				  		    <SignIn />
				  		  )
				  		)}/>
				  		<Route exact path="/signup" render={() => (
				  			this.state.uid ? (
				  				<App />
				  			) : (
				  				<SignUp />
				  			)
				  		)}/>
				  		
				  		<Route component={NoMatch}/>
				  	</Switch>
				</div>
		  	</Router>
		)

	}
}

export default Home;

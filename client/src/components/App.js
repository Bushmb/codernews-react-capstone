import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ContentContainer from '../containers/ContentContainer';
import { withRouter } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
  	this.props.history.push('/');
  }
  render() {
    return (
      <div className="content-container">
        <Header />
        <h1 className="elegantshd">Coder News</h1>
        <ContentContainer />
      </div>
    );
  }
}

export default withRouter(App);
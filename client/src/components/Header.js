import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import firebase from 'firebase';

import './App.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.signUserOut = this.signUserOut.bind(this);
        this.state = {
            isOpen: false
        };
    }

    signUserOut() {
    firebase.auth().signOut().then(function() {
      console.log("Signing Out")
    }).catch(function(error) {
      console.log(error)
    });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <div>
        <Navbar className="App-header container" color="faded" inverse fixed="top" toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/" className="navbarL-brand">
            Coder News
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <button style={{ zIndex: 1000 }} className="btn btn-info btn-signout" type="button" onClick={() => this.signUserOut()}>
                  Sign Out
                </button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>;
  }
}

export default Header;



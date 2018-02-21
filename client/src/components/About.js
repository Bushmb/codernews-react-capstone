import React, { Component } from 'react';
import './Landing.css';

class About extends Component {
    render() {
        return (
            <section id="about" className="container content-section text-center">
                <div className="row">
                    <div className="col-lg-8 offset-md-2">
                        <h2>About Coder News</h2>
                        <p>Coder News is a simple way to read articles about the
                            most popular programming languages.  It starts with 
                            scouring Hacker News for news related to the top six 
                            programming topics, including Javascript, React/Redux 
                            and Angular. Coder News follows the links and scrapes 
                            the data for you.  What you are left with is an easy 
                            to read collection of articles to read without ever 
                            needing to leave the site.  If you want to tell the 
                            rest of the world about a specific article, you can 
                            log into 
                            <a href="https://twitter.com"> Twitter </a> 
                            and Tweet away!
                        </p>
                        <p>Coder News was created as a React/Redux capstone 
                            project for Thinkful's Web Development Bootcamp.
                        </p>
                        <p>Coder News will continue to evolve as I continue to 
                            learn more about React/Redux and Node. Please check 
                            back often to see what new features are added.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
 import React, { Component } from 'react';
 import './Landing.css';
 import login from '../images/login-screen-s.gif';
 import main from '../images/main-screen-s.gif';
 import orig from '../images/origsite-screen-s.gif';
 import tweet from '../images/tweet-screen-s.gif';

 class Screens extends Component {
     render() {
         return (
             <section id="screens" className="container content-section text-center">
                 <div className="row">
                     <div className="col-lg-3 col-sm-12 about-images">
                        <p>1. Sign In</p>
                        <img src={login} alt="Login Screen" />
                     </div>
                     <div className="col-lg-3 col-sm-12 about-images">
                        <p>2. Choose a topic</p>
                         <img src={main} alt="Main Screen" />
                     </div>
                     <div className="col-lg-3 col-sm-12 about-images">
                        <p>3. View the original article</p>
                         <img src={orig} alt="Original Page Screen" />
                     </div>
                     
                     
                     <div className="col-lg-3 col-sm-12 about-images">
                        <p>4. Tweet your favorites</p>
                         <img src={tweet} alt="Twitter Screen" />
                     </div>
                 </div>
             </section>
         )
     }
 }

 export default Screens; 


            // className="container content-section text-center"
                
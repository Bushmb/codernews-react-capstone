import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBlock } from 'reactstrap';
import MyModal from './MyModal';
import './App.css';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';

const random_images_array = [img1, img2, img3, img4, img5];

function getRandomImage(imgAr) {
    
    var num = Math.floor( Math.random() * imgAr.length );
    return imgAr[ num ];
}

// Card component
export default function MakeCard (props) {
 						   
  const img = props.img !== "noimage" ? props.img : getRandomImage(random_images_array);
  
  return (
	  	<Card inverse className="opaque col-md-4 col-xs-12">
			    <CardImg onError={(e) => {e.target.src=getRandomImage(random_images_array)}} className="img" top width="100%" src={img} alt="Card image cap" />
			    <CardBlock>
			      <a className="title-link" href={props.orig_url}>
			      	<CardTitle className="text-title">{ props.title }</CardTitle>
			      </a>
			      <hr className="blue-line" />
			      <CardText>
			      	<small className="text-muted-date">{ props.date }</small>
			      	<small className="text-muted-readtime">{ props.mins_check }</small>
				  </CardText>
			      <CardText className="text-description">{ props.desc }</CardText>
			  		<div className="link-buttons" style={{ float: 'right' }}>&#x1F499; {props.points}</div>
			  		<MyModal className="link-buttons" style={{ float: 'right' }} url={props.orig_url} title={props.title} />	           	
			    </CardBlock>
		</Card>
  )
}
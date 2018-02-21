import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBlock, CardFooter } from 'reactstrap';
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
  	<div className="col-lg-4 col-md-6 col-xs-12">
  		<div className="card-spacing">
			<Card inverse className="opaque">
          <CardImg onError={e => {
              e.target.src = getRandomImage(random_images_array);
            }} className="img" top width="100%" src={img} alt="Card image cap" />
          <CardBlock>
            <a className="title-link" href={props.orig_url} target="_blank">
              <CardTitle className="text-title">{props.title}</CardTitle>
            </a>
            <hr className="blue-line" />
            <CardText>
              <small className="text-muted-date">{props.date}</small>
              <small className="text-muted-readtime">
                {props.mins_check}
              </small>
            </CardText>
            <CardText className="text-description">{props.text}...</CardText>
          </CardBlock>
          <CardFooter>
            <div className="link-buttons" style={{ float: "right" }}>
              &#x1F499; {props.points}
            </div>
            <MyModal className="link-buttons" style={{ float: "right" }} url={props.orig_url} title={props.title} />
          </CardFooter>
      </Card>
		</div>
	</div>
  )
}
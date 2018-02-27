import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardDeck } from 'reactstrap';

import '../components/App.css';

import MakeCard from '../components/MakeCard';

const divStyle = {
	marginTop: '40px',
	marginBottom: '40px',
	marginLeft: 'auto',
	marginRight: 'auto' 
};

const pStyle = {
	fontSize: '20px',
	textAlign: 'center',
	color: 'black'
};

// Container component
class CardContainer extends Component {

  layoutCards () {
  	const data = this.props.scrapedData[this.props.selectedTopic];
  	if (data) {
  	  return data.map(function (article) {
  	    return (
  	    	<MakeCard key={article.story_id} {...article} />
  	   	);
  	  });
  	} else {
  		return (
			<div style={divStyle}>
  				<p style={pStyle}>Hold tight...the data is incoming</p>
			</div>
  		)
  	}

  }
    
  render() {
  	
  	if (this.props.hasErrored) {
        return (
			<div style={divStyle}>
				<p style={pStyle}>Sorry! There was an error loading the items</p>
			</div>
		)
    }
    if (this.props.isLoading) {
		return (
			<div style={divStyle}>
				<p style={pStyle}>Loading…</p>
			</div>
		)
    }

	return (
		<div className='CardContainer'>
				<CardDeck>
					{this.layoutCards()}
				</CardDeck>
		</div>	
	)
  }
}


const mapStateToProps = (state) => {

	return {
		selectedTopic: state.topic.selectedTopic ? state.topic.selectedTopic : 'javascript',
		scrapedData: state.scrapedData,
		hasErrored: state.scrapedDataHasErrored,
		isLoading: state.scrapedDataIsLoading
	};

};

export default connect(mapStateToProps)(CardContainer);



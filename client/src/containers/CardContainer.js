import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardDeck } from 'reactstrap';

import '../components/App.css';

import MakeCard from '../components/MakeCard';

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
  			<p>Hold tight...the data is incoming</p>
  		)
  	}

  }
    
  render() {
  	
  	if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
        return <p>Loading…</p>;
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



import React, {Component, PropTypes} from 'react';
import Tweet from './Tweet.js'

class AffichageTweet extends Component{
	render(){
		return(
			<div>
				<hr/>
				<h1> Les tweets </h1>
				<hr/>
				<ul>
				{/* ... : spread opérateur pour concatener l'existant avec le nouveau*/}
					{this.props.listeTweet.map((tweet) => <Tweet key={tweet.id} {...tweet}/>)}
				</ul>			
			</div>
		)
	}
	
}
export default AffichageTweet
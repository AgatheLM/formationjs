import React, {Component, PropTypes} from 'react';
import chat from '../images/chat.jpg'
class Tweet extends Component{
	render(){
		return(
			<div>
				<li>
					
					<img src={chat} />
					{this.props.texte}
				</li>			
			</div>
		)
	}
	
}
export default Tweet
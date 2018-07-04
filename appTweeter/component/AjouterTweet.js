import React, {Component, PropTypes} from 'react';

class AjouterTweet extends Component{
	render(){
		return(
			<div>
				<input type='textarea' ref='input' maxLength="140"/>
				<br/>
				<br/>
				<button onClick= {(e) => this.intercepterClic(e)}>
					Poster le tweet
				</button>				
			</div>
		)
	}
	intercepterClic(e){
		const node=this.refs.input;
		const texte = node.value.trim();
		this.props.onTweeterClic(texte);
		node.value='';
	}
}
export default AjouterTweet
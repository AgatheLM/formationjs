import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/* React JS : API de React Trouver le noeud DOM avec la méthode ReactDOM*/
class App extends Component{
	constructor(){
		super();
		this.state={
			data:[]
		}
		this.passerEnVert=this.passerEnVert.bind(this);
	};	
	
	passerEnVert(){
		var maDiv=document.getElementById('maDiv');
		// React gère un DOM virtuel, la méthode findDOMNode permet de se placer sur le noeud demandé
		ReactDOM.findDOMNode(maDiv).style.color='green';
	};

    render(){
		return(
			<div>
			{/*Quand on clique sur le bouton on appelle la méthode Changer, appliquée à this*/}
				<button onClick={this.passerEnVert}> DOM NODE </button>
				<div id="maDiv"> Une souris verte </div>
				<div id="maDiv2"> Une souris pas verte </div>
			</div>
		);
	}
} 
export default App ;
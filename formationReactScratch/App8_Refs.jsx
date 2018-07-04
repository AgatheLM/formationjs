import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/* React JS : Usage des refs : ref*/
class App extends Component{
	constructor(){
		super();
		this.state={
			data:'initial'
		}
		this.viderChamp=this.viderChamp.bind(this);
		this.changerEtat=this.changerEtat.bind(this);
	};	
	
	changerEtat(e){
		// Pour changer l'état, en fonction de ce qui provient de l'évènement e
		this.setState({data:e.target.value});
	}
	
	viderChamp(){
		this.setState({data:''});
		// Pour replacer le curseur sur l'élément
		ReactDOM.findDOMNode(this.refs.monChamp).focus();
	}
	
    render(){
		return(
			<div>				
				<h1> Usage des refs avec React JS </h1>
				<input value={this.state.data} onChange={this.changerEtat} ref="monChamp" />		
				<button onClick={this.viderChamp}> Effacer </button>
				<span>{this.state.data}</span>
			</div>
		);
	}
} 
export default App ;


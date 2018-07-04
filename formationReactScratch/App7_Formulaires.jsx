import React, {Component} from 'react';

/* React JS : Les formulaires*/
class App extends Component{
	constructor(){
		super();
		this.state={
			data:'initial'
		}
		this.changerEtat=this.changerEtat.bind(this);

	};	
	
	changerEtat(event){
		// Pour changer l'état, en fonction de ce qui provient de l'évènement event
		this.setState({data:event.target.value})
	}

    render(){
		return(
			<div>
				{/*Champ texte de formulaire*/}
				<Formulaire changerEtatProps={this.changerEtat} dataProps={this.state.data}/> 
				
				
			</div>
		);
	}
} 
export default App ;

class Formulaire extends Component{
	constructor(){
		super();
	}
	
	render(){
		return(
			<div>
				{/*Champ texte de formulaire*/}
				<input type="text" value={this.props.dataProps} onChange={this.props.changerEtatProps}/> 
				{/*On affiche la props*/}
				<span> {this.props.dataProps}</span>
				<span> {this.state.data}</span>
			</div>
		
		)
	}
	
}
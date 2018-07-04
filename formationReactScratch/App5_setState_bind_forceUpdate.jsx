import React, {Component} from 'react';

/* React JS : API de React setState() forceUpdate et le bind*/
class App extends Component{
	constructor(){
		super();
		this.state={
			data:[]
		}
		// Pour lier l'état à la méthode changer
		this.changer=this.changer.bind(this);
		this.vider=this.vider.bind(this);
		this.forcer=this.forcer.bind(this);
	};	
	
	changer(){
		var elmt="toto";
		//On recopie le data dans une variable tableau
		var tableau=this.state.data.slice();
		//On y ajoute l'élément elmt
		tableau.push(elmt);
		//On change l'état de data, en lui donnant le tableau
		this.setState({data:tableau})
	};
	
	vider(){
		// On garde que le premier élément du tableau
		var tableau=this.state.data.splice(-1,1);
		//On change l'état de data, en lui donnant le tableau
		this.setState({data:tableau})
	};
	
	forcer(){
		/* Permet de raffraichir le composant sans changer l'état */
		this.forceUpdate();
	}
	
    render(){
		return(
			<div>
			{/*Quand on clique sur le bouton on appelle la méthode Changer, appliquée à this*/}
				<button onClick={this.changer}> Charger </button>
				<button onClick={this.vider}> Vider </button>
				/*Quand on appuie sur forcer, seul le composant est remis à jour. Le tableau ne change pas d'état*/
				<button onClick={this.forcer}> Forcer </button>
				<span>{Math.random()}</span>
				<br/>
				<h1> Mon tableau </h1>
				<h2>{this.state.data}</h2>
			</div>
		);
	}
} 
export default App ;
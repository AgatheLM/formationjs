import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Home from './home';

/* React JS : Usage des keys*/
class App extends Component{
	constructor(props){
		super(props);
		this.state={
			data:[
				{libComposant:'Premier composant',	id:1},
				{libComposant:'Deuxième composant', id:2},
				{libComposant:'Troisième composant', id:3}
			]				
		}
		this.changerEtat=this.changerEtat.bind(this);
	};	
	
	changerEtat(e){
		// Pour changer l'état du dom
		this.setState({data:[
				{libComposant:'Premier composant état 2',	id:1},
				{libComposant:'Deuxième composant état 2', id:2},
				{libComposant:'Troisième composant état 2', id:3}
			]});
	}

    render(){
		// Créer dynamiquement les éléments de l'article avec un index (key) unique
		return(
			<div>				
				<h1> Usage des Keys avec React JS </h1>
				<button onClick={this.changerEtat}> Changer </button>
				<button  type="reset">Réinitialiser</button>  
				<div>
					{/*.map pour parcourir la map, sur l'index key*/}
					{/* A chaque item, on effectue la fonction définie entre parenthèse : appeler la classe article pour les éléments*/}
					{this.state.data.map((composantCourant,i) => <Article key={i} composantD={composantCourant}/>)}				
				</div>
			</div>
		);
	}
} 

class Article extends Component{
	render(){
			return(
				<div>
					<div> {this.props.composantD.libComposant} </div>
					<div> {this.props.composantD.id} </div>
				</div>			
			)
	}
	
}
export default App ;


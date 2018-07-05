import React, {Component} from 'react';


/* React JS : Cycle de vie des composants*/
/* Quand on utilise les accolades c'est qu'on est en jsx*/

class App extends Component{
	
	constructor(props){
		//le paramètre props est optionnel, en général on le met quand on va utiliser les props
		super(props);
		this.state={
			data: 0
		}
		this.setCompteur = this.setCompteur.bind(this);
	}
	
	setCompteur(){
		console.log("Log - Clic sur incrémente");
		this.setState({data:this.state.data+1});
		
	}
	
    render(){
		//console.log("render classe App");
		return(
			
				<div>				
					<h1> Cycle de vie des components React JS </h1>	
					
					<button onClick={this.setCompteur}> Incrémenter </button>
					<Article compteur={this.state.data}></Article>
				</div>

		);
	}
} 

export class Article extends Component {
	componentWillMount(){
		console.log("Log - Méthode ComponentWillMount() : s'affiche avant le rendre");
	}
	componentDidMount(){
		console.log("Log - Méthode componentDidMount() : s'affiche après le render");
	}
	componentWillReceiveProps(){
		console.log("Log - Méthode componentWillReceiveProps() : s'affiche quand on incrémente");
	}
	shouldComponentUpdate(){
		console.log("Log - Méthode shouldComponentUpdate() : s'affiche juste avant la mise a jour (test de l'autorisation) ");
		if (this.props.compteur>3) {
			return false;
		} else {
			return true;
		}
	}
	componentWillUpdate(){
			console.log("Log - Méthode componentWillUpdate() : s'affiche pendant la mise à jour");
	}
	componentDidUpdate(){
			console.log("Log - Méthode componentDidUpdate() : s'affiche après la mise à jour et le render ");
	}
	componentWillUnmount(){
		console.log("Log - Méthode componentWillUnmont() : s'affiche quand le composant va être démonté suite au timer");
	}
	
	render(){
		console.log("render classe Article");
		return(
			<div>
				<span> {this.props.compteur}</span>
			</div>
		);
	}
}

export default App;



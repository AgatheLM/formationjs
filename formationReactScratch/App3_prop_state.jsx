import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

/* React JS : combiner les props et les states*/
class App extends Component{
	constructor(){
		super();
		this.state={
			titre1:'Titre de l\'entête',
			titre2:'Titre du pied de page'
		};
	}
    render(){
		return(
			<div>
				/* On alimente le props de Header avec al valeur de l'état titre de App*/
				<Header titre={this.state.titre1}/>
				<Footer titre={this.state.titre2}/>				
			</div>
		);
	}
} 

class Header extends Component{
	    render(){
		return(
			<div>
				<h2> {this.props.titre}</h2>				
			</div>
		);
		}
}

class Footer extends Component{
	    render(){
		return(
			<div>
				<h2> {this.props.titre}</h2>				
			</div>
		);
	}
}




export default App ;
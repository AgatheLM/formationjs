import React, {Component} from 'react';
import PropTypes from 'prop-types';

/* React JS : validation des props : prop-types
              pour vérifer le format*/
class App extends Component{

    render(){
		return(
			<div>
				<h1> 	
					{this.props.nom}<br/>
					{this.props.tableau}<br/>
					{/* Boolean ? si vrai : si fax*/}
					{this.props.bool?" Vrai" : "Faux"}<br/>
					{this.props.fonction(2)}<br/>
					{this.props.nombre}<br/>
				</h1>
			</div>
		);
	}
} 

App.propTypes = {
	// en premier le type
	//en second isRequired si non null obligatoire
	nom: PropTypes.string,	
	tableau: PropTypes.array.isRequired,
	bool: PropTypes.bool.isRequired,
	fonction: PropTypes.func,
	nombre: PropTypes.number
}

App.defaultProps={
	nom: "Le Meur",
	tableau: [12,12,88],
	bool: true,
	fonction: function(arg){
				return arg;
			 } ,
	nombre: 2
}


export default App ;
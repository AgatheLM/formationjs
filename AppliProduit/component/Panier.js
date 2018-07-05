import React, {Component, PropTypes} from 'react';
import Produit from './Produit.js'
import AjouterPanier from './AjouterPanier'

class Liste extends Component{
	render(){
		console.log(this.props.listeProduitsPanier);
		return(
			<div>
				<ul>
				{/* ... : spread opérateur pour concatener l'existant avec le nouveau*/}
					{this.props.listeProduitsPanier.map((produit) => { console.log(produit) ; 
					<Produit key={produit.id} {...produit}/>})}
				</ul>			
			</div>
		)
	}
	
}
export default Liste
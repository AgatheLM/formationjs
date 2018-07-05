import React, {Component, PropTypes} from 'react';
import ProduitBtnPanier from './ProduitBtnPanier.js'
import AjouterPanier from './AjouterPanier'

class Liste extends Component{
	render(){
		return(
			<div>
				<ul>
				{/* ... : spread opérateur pour concatener l'existant avec le nouveau*/}
					{this.props.listeProduits.map((produit) => <ProduitBtnPanier key={produit.id} 
																 produit={produit} 
																 {...produit} 
																 fonction={this.props.onPanierClick}/>)}
					
				</ul>			
			</div>
		)
	}
	
}
export default Liste
import React, {Component, PropTypes} from 'react';
import Produit from './Produit';
//import PropTypes from 'prop-types';


class ProduitBtnPanier extends Component{
	render(){
		return(
			<div>				
					<Produit {...this.props}/>
					<button onClick= {(e) => this.btnAjouterProduitPanier(e)} > Ajouter au pannier </button>
							
			</div>
		)
	}


	btnAjouterProduitPanier(e){
	
		// OnAddClick est la fonction passée en props dans le App
		this.props.fonction(this.props.produit);

	}
	
}
export default ProduitBtnPanier


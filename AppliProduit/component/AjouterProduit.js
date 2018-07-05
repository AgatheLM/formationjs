import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

class AjouterProduit extends Component{
	render(){
		return(
			<div>
				<label htmlFor="reference"> Référence  </label>
				<input type='text' id='reference' ref='reference'/>
				<br></br>
				<label htmlFor="nom"> Nom  </label>
				<input type='text' id='nom' ref='nom'/>
				<br></br>
				<label htmlFor="prix"> Prix  </label>
				<input type='number' id='prix' ref='prix'/>	
				<br></br>				
				<button onClick= {(e) => this.btnAjouterProduit(e)}>
					Ajouter produit
				</button>				
			</div>
		)
	}
	
	btnAjouterProduit(e){
		var inputRef=document.getElementById('reference');
		var inputNom=document.getElementById('nom');
		var inputPrix=document.getElementById('prix');
		
		const refPdt = ReactDOM.findDOMNode(inputRef).value.trim();
		const nomPdt = ReactDOM.findDOMNode(inputNom).value.trim();
		const prixPdt = ReactDOM.findDOMNode(inputPrix).value;
		// OnAddClick est la fonction passée en props dans le App
		this.props.onAddClick(refPdt, nomPdt, prixPdt);
		ReactDOM.findDOMNode(inputRef).value='';
		ReactDOM.findDOMNode(inputNom).value='';
		ReactDOM.findDOMNode(inputPrix).value='';
	}
}
export default AjouterProduit